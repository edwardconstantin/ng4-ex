#!/bin/sh

PROJID="play-187921"

ver=$1

#cmd="docker build -t gcr.io/play-187921/play-app"

#cmd="$cmd:$ver ."
#echo $cmd
# eval $cmd

echo "Docker building........................"
docker build -t gcr.io/$PROJID/play-app:$ver .


echo "Pushing to Repository.................."
gcloud docker -- push gcr.io/$PROJID/play-app:$ver

#echo "Deploying.............................."
#kubectl run play-web --image=gcr.io/$PROJID/play-app:$ver --port 80

#Expose your application to the Internet
#echo "Exposing to Internet"
#kubectl expose deployment play-web --type=LoadBalancer --port 80 --target-port 80

# Now, apply a rolling update to the existing deployment with an image update:
echo "Apply a rolling update................."
kubectl set image deployment/play-web play-web=gcr.io/$PROJID/play-app:$ver
