REM Three posts, with data from @data1.json to @data3.json
curl -d "@data1.json" -H "Content-Type: application/json" -X POST http://localhost:3000/api/blog
curl -d "@data2.json" -H "Content-Type: application/json" -X POST http://localhost:3000/api/blog
curl -d "@data3.json" -H "Content-Type: application/json" -X POST http://localhost:3000/api/blog
