curl "http://localhost:4741/lists/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "list": {
      "item": "'"${ITEM}"'"
    }
  }'

echo
