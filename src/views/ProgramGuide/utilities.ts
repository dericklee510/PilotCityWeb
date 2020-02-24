import { PickByValue } from 'utility-types';
import { RawLocation } from 'vue-router';
import { team_snippet } from 'src/views/ProgramGuide/components/';
import Component, { mixins } from "vue-class-component";
import { combineLatest, Observable } from "rxjs";
import { map, switchMap, } from "rxjs/operators";
import { doc } from "rxfire/firestore/";
import { flatten } from "lodash";
import { Classroom, Project } from "@/store/Database/types/types";
import { FbStore } from "@/store";
import Vue from "vue";
@Component<latestProjectDataMixin>({
    subscriptions() {
        return ({
            latestProjectData: this.latestProjectData$
        })
    },
    data: (): { latestProjectData: (Project & Record<string, any>)[] } => ({ latestProjectData: [] })
})
export class latestProjectDataMixin extends Vue {
    latestProjectData?: (Project & Record<string, any>)[] = []
    latestProjectData$: Observable<(Project & Record<string, any>)[]> = combineLatest(
        FbStore.currentTeacherProgramData!.classroomIds.map(classroomId =>
            doc(FbStore.firestore.collection("Classroom").doc(classroomId))
        )
    ).pipe(
        map(classroomDocArr =>
            flatten(
                classroomDocArr.map(classroomDoc =>
                    classroomDoc
                        .data<Classroom>()
                        .projectIds.map(projectId =>
                            doc(FbStore.firestore.collection("Project").doc(projectId))
                        )
                )
            )
        ),
        switchMap(projectDocs => combineLatest<firebase.firestore.DocumentSnapshot[]>(...projectDocs)),
        map(projectdocs => projectdocs.map(projectdoc => projectdoc.data<Project>())),
    )

}

export function getlatestProjectSnippetsMixin(arg: {
    item_preview: keyof PickByValue<Project, string | undefined>,
    router_params?: RawLocation,
    href?: keyof PickByValue<Project, string | undefined>
    rating: "problemRating" | "solutionRating" |
    "innovationRating" |
    "customerRating" |
    "sentencePitchRating" |
    "elevatorPitchRating" |
    "demoRating" |
    "presentationRating"


}) {
    @Component
    class latestProjectSnippetsMixin extends mixins(latestProjectDataMixin) {
        get entries(): team_snippet[] {
            if (this.latestProjectData)
                return this.latestProjectData.map(project => ({
                    projectId: project.projectId,
                    name: project.teamName,
                    item_preview: project[arg.item_preview] || "",
                    router_params: arg.router_params,
                    href: arg.href ? project[arg.href] : undefined,
                    rating: project[`${arg.rating}${FbStore.userCitizenType?.charAt(0).toUpperCase()}`] || 0
                }))
            else
                return []
        }
    }
    return latestProjectSnippetsMixin
}
@Component
export class latestProjectSnippetsMixin extends mixins(latestProjectDataMixin) {

}