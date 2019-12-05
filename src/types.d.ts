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
  /** ISO 8601 format for the date */
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
