This can be deployed to AWS for future payments processing.
Configs must be changed to point to production deployment addresses (Square account and AWS Host).

Use the script start.sh as:
```
sh -c ./start.sh
```
to start the server and listen for incoming payemnts on the port listed in the script.
