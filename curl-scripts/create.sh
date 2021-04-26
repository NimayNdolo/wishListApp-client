curl "http://localhost:4741/lists" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "list": {
      "item": "'"${ITEM}"'"
    }
  }'


echo
