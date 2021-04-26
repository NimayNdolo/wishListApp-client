curl "http://localhost:4741/lists" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
