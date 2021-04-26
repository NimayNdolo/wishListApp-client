curl "http://localhost:4741/lists/${ID}" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo
