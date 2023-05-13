# Checklist

## Commands

```bash

docker build --build-arg PKG_NAME=test_package -t coworkout:v1 .
docker run -it --rm -p 127.0.0.1:8080:8080/tcp coworkout:v1

```

## Test gcr images

```bash
gcloud auth configure-docker
docker pull gcr.io/coworkout-20230409/github.com/benxgao/coworkout-run@sha256:3bed6d0934d2f6a46a67188791db987268607e204dfb7d78b0417051e7d3f43f
```

## exec

```bash
 docker container exec $(docker ps --filter name=redis -q) ls -l /run/secrets
 docker container exec $(docker ps --filter name=redis -q) cat /run/secrets/my_secret_data
```

## References

[how_to_use_docker_env_vars](https://vsupalov.com/docker-env-vars/)
