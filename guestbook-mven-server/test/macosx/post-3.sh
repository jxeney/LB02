# To execute in bash (mac terminal)
# Don't forget to set executable rights for this script with chmod:
# chmod +x post-1.sh
# Three posts, with data from @data1.json to @data3.json
curl -d "@data3.json" -H "Content-Type: application/json" -X POST http://localhost:3000/api/blog
