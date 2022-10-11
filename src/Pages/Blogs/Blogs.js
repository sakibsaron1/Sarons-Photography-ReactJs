import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>1.Difference between authorization and authentication ?</h2>
            <p>What's the difference between authentication and authorization? Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.

While authentication and authorization might sound similar, they are distinct security processes in the world of identity and access management (IAM).

Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.

Giving someone permission to download a particular file on a server or providing individual users with administrative access to an application are good examples of authorization.</p> <br />
            <h2>2. Why are you using firebase ?  </h2>
            <p>2.1.Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. <br />
            
            2.2.Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen <br />

            2.3.Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance <br />

            2.4.Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience <br />
            
            </p> <br />
            <h2>2.2 What other options do you have to implement authentication?</h2>
            
            <p>When a user registers for an account, they must create a unique ID and key that will allow them to access their account later on. Generally, a username and password are used as the ID and key, but the credentials can include other forms of keys as well (see our section on types of user authentication).

Essentially, the user authentication process is what provides users repeat access to their own accounts while attempting to block any unauthenticated users from gaining access. This means that User A can log in to their own account, while User B would be denied access. Conversely, User B could access their own account, while User A would be unable to.</p>
            <br />
            <h2>3.Difference between authorization and authentication ?</h2>
            <p>3.1.Back4App </p> 
            <p>3.2.Parse </p> 
            <p>3.3.AWS Amplify </p> 
            <p>3.4.Backendless </p> 
            <p>3.5.Kuzzle </p> 
            <p>3.6.Supabase </p> 
            <p>3.7.appwrite </p> 
            <p>3.8.Hasura </p> 
            <p>3.9.Nhost </p> 
            <p>3.10.Deployd </p> 
        </div>
    );
};

export default Blogs;