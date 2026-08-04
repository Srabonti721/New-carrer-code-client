import React, { Suspense } from 'react';
import MyApplicationStat from './MyApplicationStat';
import ApplicationsList from './ApplicationsList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../api/myApplicationsApi';



const MyApplications = () => {
    const {users} = useAuth()
    return (
        <div>
            <MyApplicationStat/>
            <Suspense fallback={"your applications is loading"}>
 <ApplicationsList myApplicationsPromise={myApplicationsPromise(users.email)} />
            </Suspense>
           
        </div>
    );
};

export default MyApplications;