import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Employer_Profile_V1 = {
   __typename?: 'Employer_profile_v1',
  user_id?: Maybe<Scalars['String']>,
  citizen_first_name?: Maybe<Scalars['String']>,
  citizen_last_name?: Maybe<Scalars['String']>,
  citizen_position?: Maybe<Scalars['String']>,
  citizen_organization?: Maybe<Scalars['String']>,
  organization_division?: Maybe<Scalars['String']>,
  organization_location_text?: Maybe<Scalars['String']>,
  organization_location_lng?: Maybe<Scalars['Float']>,
  organization_location_lat?: Maybe<Scalars['Float']>,
  organization_industry?: Maybe<Scalars['Int']>,
  organization_industry_other?: Maybe<Scalars['String']>,
  organization_product_list?: Maybe<Array<Maybe<Scalars['String']>>>,
  organization_product_employee_count?: Maybe<Scalars['String']>,
  program_externship_time_first?: Maybe<Scalars['String']>,
  program_externship_time_second?: Maybe<Scalars['String']>,
  program_externship_time_third?: Maybe<Scalars['String']>,
  program_externship_options?: Maybe<Scalars['Int']>,
  program_externship_options_other?: Maybe<Scalars['String']>,
  projects_min?: Maybe<Scalars['Int']>,
  projects_max?: Maybe<Scalars['Int']>,
  projects_engagement?: Maybe<Scalars['Int']>,
  projects_engagement_2?: Maybe<Scalars['Int']>,
  projects_solutions?: Maybe<Array<Maybe<Scalars['String']>>>,
  internships_project?: Maybe<Scalars['Int']>,
  internships_project_other?: Maybe<Scalars['String']>,
  internships_hiring_adult?: Maybe<Scalars['Boolean']>,
  internships_travel?: Maybe<Scalars['Int']>,
  internships_education?: Maybe<Scalars['Int']>,
  internships_education_other?: Maybe<Scalars['String']>,
  internships_talent?: Maybe<Scalars['Int']>,
  internships_hours_week?: Maybe<Scalars['Int']>,
  internships_hours_day?: Maybe<Scalars['Int']>,
  internships_employer_of_record?: Maybe<Scalars['Int']>,
  internships_compensation?: Maybe<Scalars['Int']>,
  internships_budget_min?: Maybe<Scalars['Int']>,
  internships_budget_max?: Maybe<Scalars['Int']>,
  internships_interview_option1?: Maybe<Scalars['String']>,
  internships_interview_option2?: Maybe<Scalars['String']>,
  internships_interview_option3?: Maybe<Scalars['String']>,
  internships_employment?: Maybe<Scalars['Boolean']>,
  internships_position?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  updatePublicCitizenProfile?: Maybe<Scalars['String']>,
  createPublicCitizenProfile?: Maybe<Public_Citizen_Profile>,
  updatePrivateCitizenProfile?: Maybe<Scalars['String']>,
  createEmployerProfile?: Maybe<Employer_Profile_V1>,
  createTeacherProfile?: Maybe<Teacher_Profile_V1>,
};


export type MutationUpdatePublicCitizenProfileArgs = {
  id_token: Scalars['String'],
  creation_date?: Maybe<Scalars['String']>,
  last_update?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  citizen_type?: Maybe<Scalars['String']>,
  citizen_description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  profile_img_url?: Maybe<Scalars['String']>
};


export type MutationCreatePublicCitizenProfileArgs = {
  id_token: Scalars['String'],
  first_name: Scalars['String'],
  last_name: Scalars['String'],
  citizen_type: Scalars['String'],
  citizen_description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  profile_img_url?: Maybe<Scalars['String']>
};


export type MutationUpdatePrivateCitizenProfileArgs = {
  id_token: Scalars['String'],
  race?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  dob?: Maybe<Scalars['String']>,
  ssn?: Maybe<Scalars['String']>,
  email_opt_out?: Maybe<Scalars['Boolean']>,
  phone_verified?: Maybe<Scalars['Boolean']>
};


export type MutationCreateEmployerProfileArgs = {
  id_token: Scalars['String'],
  citizen_first_name: Scalars['String'],
  citizen_last_name: Scalars['String'],
  citizen_position: Scalars['String'],
  citizen_organization: Scalars['String'],
  organization_division: Scalars['String'],
  organization_location_text: Scalars['String'],
  organization_location_lng: Scalars['Float'],
  organization_location_lat: Scalars['Float'],
  organization_industry: Scalars['Int'],
  organization_industry_other?: Maybe<Scalars['String']>,
  organization_product_list: Array<Maybe<Scalars['String']>>,
  organization_product_employee_count: Scalars['String'],
  program_externship_time_first: Scalars['String'],
  program_externship_time_second: Scalars['String'],
  program_externship_time_third: Scalars['String'],
  program_externship_options: Scalars['Int'],
  program_externship_options_other?: Maybe<Scalars['String']>,
  projects_min: Scalars['Int'],
  projects_max: Scalars['Int'],
  projects_engagement: Scalars['Int'],
  projects_engagement_2: Scalars['Int'],
  projects_solutions: Array<Maybe<Scalars['String']>>,
  internships_project: Scalars['Int'],
  internships_project_other?: Maybe<Scalars['String']>,
  internships_hiring_adult: Scalars['Boolean'],
  internships_travel: Scalars['Int'],
  internships_education: Scalars['Int'],
  internships_education_other?: Maybe<Scalars['String']>,
  internships_talent: Scalars['Int'],
  internships_hours_week: Scalars['Int'],
  internships_hours_day: Scalars['Int'],
  internships_employer_of_record: Scalars['Int'],
  internships_compensation: Scalars['Int'],
  internships_budget_min: Scalars['Int'],
  internships_budget_max: Scalars['Int'],
  internships_interview_option1: Scalars['String'],
  internships_interview_option2: Scalars['String'],
  internships_interview_option3: Scalars['String'],
  internships_employment: Scalars['Boolean'],
  internships_position: Scalars['Int']
};


export type MutationCreateTeacherProfileArgs = {
  id_token: Scalars['String'],
  school_district: Scalars['String'],
  school_name: Scalars['String'],
  school_location: Scalars['String'],
  bell_schedule: Scalars['String'],
  classroom_room_location: Scalars['String'],
  classroom_room_phone: Scalars['String'],
  extension?: Maybe<Scalars['String']>,
  preferred: Scalars['Int'],
  preferred_other?: Maybe<Scalars['String']>,
  tool_equipment?: Maybe<Array<Maybe<Scalars['String']>>>,
  courses_school_year: Scalars['String'],
  prep_period: Scalars['Int'],
  course_information: Scalars['String'],
  enrolled_courses: Scalars['String'],
  enagement_alternative: Scalars['Boolean'],
  purchase_emp_product: Scalars['Int']
};

export type Private_Citizen_Profile = {
   __typename?: 'Private_citizen_profile',
  user_id: Scalars['String'],
  race?: Maybe<Scalars['String']>,
  gender?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  dob?: Maybe<Scalars['String']>,
  ssn?: Maybe<Scalars['String']>,
  email_opt_out?: Maybe<Scalars['Boolean']>,
  phone_verified?: Maybe<Scalars['Boolean']>,
};

export type Public_Citizen_Profile = {
   __typename?: 'Public_citizen_profile',
  user_id: Scalars['String'],
  creation_date?: Maybe<Scalars['String']>,
  last_update?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  citizen_type?: Maybe<Scalars['String']>,
  citizen_description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  profile_img_url?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  TeacherProfile?: Maybe<Teacher_Profile_V1>,
  EmployerProfile?: Maybe<Employer_Profile_V1>,
  PublicCitizenProfile?: Maybe<Public_Citizen_Profile>,
  PrivateCitizenProfile?: Maybe<Private_Citizen_Profile>,
};


export type QueryTeacherProfileArgs = {
  user_id: Scalars['String']
};


export type QueryEmployerProfileArgs = {
  user_id: Scalars['String']
};


export type QueryPublicCitizenProfileArgs = {
  user_id: Scalars['String']
};


export type QueryPrivateCitizenProfileArgs = {
  user_id: Scalars['String']
};

export type Teacher_Profile_V1 = {
   __typename?: 'Teacher_profile_v1',
  user_id?: Maybe<Scalars['String']>,
  school_district?: Maybe<Scalars['String']>,
  school_name?: Maybe<Scalars['String']>,
  school_location?: Maybe<Scalars['String']>,
  bell_schedule?: Maybe<Scalars['String']>,
  classroom_room_location?: Maybe<Scalars['String']>,
  classroom_room_phone?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  preferred?: Maybe<Scalars['Int']>,
  preferred_other?: Maybe<Scalars['String']>,
  tool_equipment?: Maybe<Array<Maybe<Scalars['String']>>>,
  courses_school_year?: Maybe<Scalars['String']>,
  prep_period?: Maybe<Scalars['Int']>,
  course_information?: Maybe<Scalars['String']>,
  enrolled_courses?: Maybe<Scalars['String']>,
  enagement_alternative?: Maybe<Scalars['Boolean']>,
  purchase_emp_product?: Maybe<Scalars['Int']>,
};

export type PublicProfileFetchQueryVariables = {
  user_id: Scalars['String']
};


export type PublicProfileFetchQuery = (
  { __typename?: 'Query' }
  & { PublicCitizenProfile: Maybe<(
    { __typename?: 'Public_citizen_profile' }
    & Pick<Public_Citizen_Profile, 'first_name' | 'last_name' | 'title' | 'profile_img_url'>
  )> }
);

export type PublicEmployerFetchQueryVariables = {
  user_id: Scalars['String']
};


export type PublicEmployerFetchQuery = (
  { __typename?: 'Query' }
  & { EmployerProfile: Maybe<(
    { __typename?: 'Employer_profile_v1' }
    & Pick<Employer_Profile_V1, 'citizen_first_name' | 'citizen_last_name' | 'citizen_position' | 'citizen_organization' | 'organization_division' | 'organization_location_text' | 'organization_location_lng' | 'organization_location_lat' | 'organization_industry' | 'organization_industry_other' | 'organization_product_list' | 'organization_product_employee_count' | 'program_externship_time_first' | 'program_externship_time_second' | 'program_externship_time_third' | 'program_externship_options' | 'program_externship_options_other' | 'projects_min' | 'projects_max' | 'projects_engagement' | 'projects_engagement_2' | 'projects_solutions' | 'internships_project' | 'internships_project_other' | 'internships_hiring_adult' | 'internships_travel' | 'internships_education' | 'internships_education_other' | 'internships_talent' | 'internships_hours_week' | 'internships_hours_day' | 'internships_employer_of_record' | 'internships_compensation' | 'internships_budget_min' | 'internships_budget_max' | 'internships_interview_option1' | 'internships_interview_option2' | 'internships_interview_option3' | 'internships_employment' | 'internships_position'>
  )> }
);

export type UpdatePublicProfileMutationVariables = {
  id_token: Scalars['String'],
  creation_date?: Maybe<Scalars['String']>,
  last_update?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  citizen_type?: Maybe<Scalars['String']>,
  citizen_description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  profile_img_url?: Maybe<Scalars['String']>
};


export type UpdatePublicProfileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePublicCitizenProfile'>
);

export type CreatePublicCitizenProfileMutationVariables = {
  id_token: Scalars['String'],
  first_name: Scalars['String'],
  last_name: Scalars['String'],
  citizen_type: Scalars['String'],
  title: Scalars['String'],
  profile_img_url?: Maybe<Scalars['String']>
};


export type CreatePublicCitizenProfileMutation = (
  { __typename?: 'Mutation' }
  & { createPublicCitizenProfile: Maybe<(
    { __typename?: 'Public_citizen_profile' }
    & Pick<Public_Citizen_Profile, 'user_id'>
  )> }
);

export type CreateEmployerProfileMutationVariables = {
  id_token: Scalars['String'],
  citizen_first_name: Scalars['String'],
  citizen_last_name: Scalars['String'],
  citizen_position: Scalars['String'],
  citizen_organization: Scalars['String'],
  organization_division: Scalars['String'],
  organization_location_text: Scalars['String'],
  organization_location_lng: Scalars['Float'],
  organization_location_lat: Scalars['Float'],
  organization_industry: Scalars['Int'],
  organization_industry_other: Scalars['String'],
  organization_product_list: Array<Maybe<Scalars['String']>>,
  organization_product_employee_count: Scalars['String'],
  program_externship_time_first: Scalars['String'],
  program_externship_time_second: Scalars['String'],
  program_externship_time_third: Scalars['String'],
  program_externship_options: Scalars['Int'],
  program_externship_options_other: Scalars['String'],
  projects_min: Scalars['Int'],
  projects_max: Scalars['Int'],
  projects_engagement: Scalars['Int'],
  projects_engagement_2: Scalars['Int'],
  projects_solutions: Array<Maybe<Scalars['String']>>,
  internships_project: Scalars['Int'],
  internships_project_other: Scalars['String'],
  internships_hiring_adult: Scalars['Boolean'],
  internships_travel: Scalars['Int'],
  internships_education: Scalars['Int'],
  internships_education_other: Scalars['String'],
  internships_talent: Scalars['Int'],
  internships_hours_week: Scalars['Int'],
  internships_hours_day: Scalars['Int'],
  internships_employer_of_record: Scalars['Int'],
  internships_compensation: Scalars['Int'],
  internships_budget_min: Scalars['Int'],
  internships_budget_max: Scalars['Int'],
  internships_interview_option1: Scalars['String'],
  internships_interview_option2: Scalars['String'],
  internships_interview_option3: Scalars['String'],
  internships_employment: Scalars['Boolean'],
  internships_position: Scalars['Int']
};


export type CreateEmployerProfileMutation = (
  { __typename?: 'Mutation' }
  & { createEmployerProfile: Maybe<(
    { __typename?: 'Employer_profile_v1' }
    & Pick<Employer_Profile_V1, 'user_id'>
  )> }
);


export const PublicProfileFetchDocument = gql`
    query publicProfileFetch($user_id: String!) {
  PublicCitizenProfile(user_id: $user_id) {
    first_name
    last_name
    title
    profile_img_url
  }
}
    `;
export const PublicEmployerFetchDocument = gql`
    query publicEmployerFetch($user_id: String!) {
  EmployerProfile(user_id: $user_id) {
    citizen_first_name
    citizen_last_name
    citizen_position
    citizen_organization
    organization_division
    organization_location_text
    organization_location_lng
    organization_location_lat
    organization_industry
    organization_industry_other
    organization_product_list
    organization_product_employee_count
    program_externship_time_first
    program_externship_time_second
    program_externship_time_third
    program_externship_options
    program_externship_options_other
    projects_min
    projects_max
    projects_engagement
    projects_engagement_2
    projects_solutions
    internships_project
    internships_project_other
    internships_hiring_adult
    internships_travel
    internships_education
    internships_education_other
    internships_talent
    internships_hours_week
    internships_hours_day
    internships_employer_of_record
    internships_compensation
    internships_budget_min
    internships_budget_max
    internships_interview_option1
    internships_interview_option2
    internships_interview_option3
    internships_employment
    internships_position
  }
}
    `;
export const UpdatePublicProfileDocument = gql`
    mutation updatePublicProfile($id_token: String!, $creation_date: String, $last_update: String, $first_name: String, $last_name: String, $citizen_type: String, $citizen_description: String, $title: String, $profile_img_url: String) {
  updatePublicCitizenProfile(id_token: $id_token, creation_date: $creation_date, last_update: $last_update, first_name: $first_name, last_name: $last_name, citizen_type: $citizen_type, citizen_description: $citizen_description, title: $title, profile_img_url: $profile_img_url)
}
    `;
export const CreatePublicCitizenProfileDocument = gql`
    mutation createPublicCitizenProfile($id_token: String!, $first_name: String!, $last_name: String!, $citizen_type: String!, $title: String!, $profile_img_url: String) {
  createPublicCitizenProfile(id_token: $id_token, first_name: $first_name, last_name: $last_name, citizen_type: $citizen_type, title: $title, profile_img_url: $profile_img_url) {
    user_id
  }
}
    `;
export const CreateEmployerProfileDocument = gql`
    mutation createEmployerProfile($id_token: String!, $citizen_first_name: String!, $citizen_last_name: String!, $citizen_position: String!, $citizen_organization: String!, $organization_division: String!, $organization_location_text: String!, $organization_location_lng: Float!, $organization_location_lat: Float!, $organization_industry: Int!, $organization_industry_other: String!, $organization_product_list: [String]!, $organization_product_employee_count: String!, $program_externship_time_first: String!, $program_externship_time_second: String!, $program_externship_time_third: String!, $program_externship_options: Int!, $program_externship_options_other: String!, $projects_min: Int!, $projects_max: Int!, $projects_engagement: Int!, $projects_engagement_2: Int!, $projects_solutions: [String]!, $internships_project: Int!, $internships_project_other: String!, $internships_hiring_adult: Boolean!, $internships_travel: Int!, $internships_education: Int!, $internships_education_other: String!, $internships_talent: Int!, $internships_hours_week: Int!, $internships_hours_day: Int!, $internships_employer_of_record: Int!, $internships_compensation: Int!, $internships_budget_min: Int!, $internships_budget_max: Int!, $internships_interview_option1: String!, $internships_interview_option2: String!, $internships_interview_option3: String!, $internships_employment: Boolean!, $internships_position: Int!) {
  createEmployerProfile(id_token: $id_token, citizen_first_name: $citizen_first_name, citizen_last_name: $citizen_last_name, citizen_position: $citizen_position, citizen_organization: $citizen_organization, organization_division: $organization_division, organization_location_text: $organization_location_text, organization_location_lng: $organization_location_lng, organization_location_lat: $organization_location_lat, organization_industry: $organization_industry, organization_industry_other: $organization_industry_other, organization_product_list: $organization_product_list, organization_product_employee_count: $organization_product_employee_count, program_externship_time_first: $program_externship_time_first, program_externship_time_second: $program_externship_time_second, program_externship_time_third: $program_externship_time_third, program_externship_options: $program_externship_options, program_externship_options_other: $program_externship_options_other, projects_min: $projects_min, projects_max: $projects_max, projects_engagement: $projects_engagement, projects_engagement_2: $projects_engagement_2, projects_solutions: $projects_solutions, internships_project: $internships_project, internships_project_other: $internships_project_other, internships_hiring_adult: $internships_hiring_adult, internships_travel: $internships_travel, internships_education: $internships_education, internships_education_other: $internships_education_other, internships_talent: $internships_talent, internships_hours_week: $internships_hours_week, internships_hours_day: $internships_hours_day, internships_employer_of_record: $internships_employer_of_record, internships_compensation: $internships_compensation, internships_budget_min: $internships_budget_min, internships_budget_max: $internships_budget_max, internships_interview_option1: $internships_interview_option1, internships_interview_option2: $internships_interview_option2, internships_interview_option3: $internships_interview_option3, internships_employment: $internships_employment, internships_position: $internships_position) {
    user_id
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    publicProfileFetch(variables: PublicProfileFetchQueryVariables): Promise<PublicProfileFetchQuery> {
      return client.request<PublicProfileFetchQuery>(print(PublicProfileFetchDocument), variables);
    },
    publicEmployerFetch(variables: PublicEmployerFetchQueryVariables): Promise<PublicEmployerFetchQuery> {
      return client.request<PublicEmployerFetchQuery>(print(PublicEmployerFetchDocument), variables);
    },
    updatePublicProfile(variables: UpdatePublicProfileMutationVariables): Promise<UpdatePublicProfileMutation> {
      return client.request<UpdatePublicProfileMutation>(print(UpdatePublicProfileDocument), variables);
    },
    createPublicCitizenProfile(variables: CreatePublicCitizenProfileMutationVariables): Promise<CreatePublicCitizenProfileMutation> {
      return client.request<CreatePublicCitizenProfileMutation>(print(CreatePublicCitizenProfileDocument), variables);
    },
    createEmployerProfile(variables: CreateEmployerProfileMutationVariables): Promise<CreateEmployerProfileMutation> {
      return client.request<CreateEmployerProfileMutation>(print(CreateEmployerProfileDocument), variables);
    }
  };
}