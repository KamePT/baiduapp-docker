#!/bin/sh
echo "nameserver 223.5.5.5" >> /etc/resolv.conf

java -XX:+UnlockExperimentalVMOptions -XX:+UseCGroupMemoryLimitForHeap -Djava.security.egd=file:/dev/./urandom -jar /app.jar --spring.config.additional-location=/application.yml &
nginx -g "daemon on;"

while true
do
    java=$( ps -ef | grep java | grep -v grep | wc -l )
    nginx=$( ps -ef | grep nginx | grep -v grep | wc -l )
    if [ $java -eq 0 ];then
        echo "java exit"
        return
    fi
    if [ $nginx -eq 0 ];then
        echo "nginx exit"
        return
    fi
    sleep 10
done