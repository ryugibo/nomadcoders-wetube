# MongoDB

## WSL 에서 MongoDB 구성

- https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-mongodb

## service로 실행되지 않는 문제.

- 대충 로그 파일에 이런게 남고 서비스 실행이 안됨.
  `{"t":{"$date":"2023-02-24T16:08:08.902+09:00"},"s":"I",  "c":"CONTROL",  "id":23330,   "ctx":"main","msg":"ERROR: Cannot write pid file to {path_string}: {errAndStr_second}","attr":{"path_string":"/var/run/mongod.pid","errAndStr_second":"Permission denied"}}`
- 몇가지 해법 테스트해보고 안되서 서비스 실행은 포기
- 아래 명령어로 작업하는 동안만 MongoDB를 띄워놓고 함.
  `sudo mongod --dbpath ~/data/db`

## .env 필요한 상수

- `DB_URL`: mongodb 주소

- `COOKIE_SECRET`: 쿠키 비밀키

- `GITHUB_CLIENT`: Github OAuth App client id

- `GITHUB_SECRET`: Github OAuth App client secret

- `AWS_ID`: AWS AccessKey

- `AWS_SECRET`: AWS AccessKey Secret
