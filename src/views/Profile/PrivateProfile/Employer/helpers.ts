import { IPublicCitizenProfile } from './../../../../store/Graphql/types';
import { ICitizenBase } from './types';
export const citizenBaseToProfile = (base:ICitizenBase):IPublicCitizenProfile => {
    return {
        id_token:"",
// creation_date
// last_update
first_name:base.firstName,
last_name:base.lastName,
citizen_type:base.citizenType,
citizen_description:"",
title:base.honorific,
profile_img_url:base.profilePicture 
    }
}