# my-mock-api

## Example

```
curl localhost:3333
# empty response

curl localhost:3333?delay=1000
# response after 1000 milliseconds

curl localhost:3333 \
  -H 'Content-Type: application/json' \
  -d '{"response": {"foo": "bar"}}'
{"foo":"bar"}
```