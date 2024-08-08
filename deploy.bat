 
 
docker build -f "Dockerfile" --force-rm -t lunwenshenqi  "./"

set yy=%date:~0,4%
set mm=%date:~5,2%
set dd=%date:~8,2%
set f1=%yy%-%mm%-%dd%
set f2=%yy%%mm%%dd%

docker tag library/lunwenshenqi:latest odinluo/lunwenshenqi:0.%f2%
docker push odinluo/lunwenshenqi:0.%f2%

docker tag library/lunwenshenqi:latest odinluo/lunwenshenqi:latest
docker push odinluo/lunwenshenqi:latest

docker save odinluo/lunwenshenqi:latest > c:\download\lunwenshenqi-%f1%.tar
copy c:\download\lunwenshenqi-%f1%.tar \\10.0.0.1\docker\images\
