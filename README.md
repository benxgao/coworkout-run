# coworkout-run

Practice of Kubernetes architecture

## Context

Cloud build is configured to distribute Docker images whenever a commit is pushed;

```sh
docker pull gcr.io/coworkout-20230409/github.com/benxgao/coworkout-run:1d04cd2
docker run -it --rm -p 127.0.0.1:8080:8080/tcp  gcr.io/coworkout-20230409/github.com/benxgao/coworkout-run:1d04cd2
```
