Package.describe({
  name: 'fkint:paginated-subscription',
  summary: "Easily paginate a subscription that takes a limit parameter.",
  version: "0.2.5",
  git: "https://github.com/FKint/paginated-subscription.git"
});

Package.onUse(function (api, where) {
  api.use(['underscore', 'tracker']);
  api.addFiles('paginated_subscription.js', 'client');
});
