# connexone_18feb21

Times up for 4 hours

## How to Run

1. Open two separate consoles
2. Use one of the console to run backend server with ```cd backend && npm run start```
3. Use another console to run frontend server with ```cd frontend && npm run start```

## What has been done:

- error-free feature

## What need to be done:

- unit tests / integration tests
- remove excessive comments and unnecessary components generated by generators
- Add a content provider to share `axiosInstance` across components

## Worth Mentions:

- I have spent sometime on the version of `prom-client`, which is updated a few months ago. Roll back to a lower version (v12) made it run successfully.
- `create-react-app` takes half an hour to fetch. Hmm... after all these years it is still that slow.
- Running file watcher in Virtual box windows VM is bad as it requires the file watcher to poll the changes, instead of listening to system events.
- I have spent quite some time to track missing network requests from `use-http`. Later I moved to `axios` and the missing network requests are gone.
