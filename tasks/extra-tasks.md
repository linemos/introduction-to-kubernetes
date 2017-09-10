# Extra tasks

## X.1: Add more information to your cluster 

## X. Add a favicon to your application. 
Find a nice icon to use as favicon and store it inside the public-folder.
Uncomment the line inside `index.html` so that the icon is added to the file.   

## X.2: Setup build trigger. 

You might want to build a new docker image each time something is committed to a certain branch. 

1. Go to [Google Cloud Console](http://console.google.com)
2. Go to *Container Registry*
3. Choose *Build Triggers*
4. Connect your GitHub account to Google Cloud
5. Select what your trigger should trigger on. 

Add some new commits to your branch and see how it triggers a build.
Notice that you can see your previous builds under *build history*. 