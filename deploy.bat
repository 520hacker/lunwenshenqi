 
 
docker build -f "Dockerfile" --force-rm -t twoapidemo  "./"

set yy=%date:~0,4%
set mm=%date:~5,2%
set dd=%date:~8,2%
set f1=%yy%-%mm%-%dd%
set f2=%yy%%mm%%dd%

docker tag library/twoapidemo:latest odinluo/twoapidemo:0.%f2%
docker push odinluo/twoapidemo:0.%f2%

docker tag library/twoapidemo:latest odinluo/twoapidemo:latest
docker push odinluo/twoapidemo:latest

docker save odinluo/twoapidemo:latest > c:\download\twoapi-demo-core-%f1%.tar
copy c:\download\twoapi-demo-core-%f1%.tar \\10.0.0.1\docker\images\
