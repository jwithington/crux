workflow "New workflow" {
  on = "push"
  resolves = ["build"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
  args = "install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "yarn"
  needs = "install"
  args = "build"
}
