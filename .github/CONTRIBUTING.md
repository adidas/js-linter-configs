# Updating project specific configurations

This situation can happen when a rule is affecting some project due to specific requirements or behaviors.

To add, update or disable a rule:

1. Test the new configuration:
    - What becomes affected?
    - Does it warn about new errors?
    - Does it change the general coding style?
1. Come to an agreement with your team.
    - Evaluate alternatives.
    - Make sure everyone is aligned with the change.
    - If any, consult the change with a reviewer.
1. Update your project's configuration file accordingly.

# Updating global configurations

The flow for updating this repository is the following:

1. Fork this repository.
1. Create a `feature` or `bugfix` branch based on an existing Jira ticket.
1. Commit, push and create a pull request with your changes.
    - You **must** update the global `package.json` version.
        - Patch version `+1` if `bugfix`.
        - Minor version `+1`, reset patch to `0` if `feature`.
        - In case of doubt, ask the maintainers.
    - You **must** update the changelog accordingly with the changes.
        - Use new version.
        - Keep format unified with existing log.
        - `# x.y.z` for releases and minor versions, `## x.y.z` for patch versions.
    - You **must** update examples accordingly to reflect the changes.
    - Your build **must** pass.
1. Wait until someone reviews and approves or requests changes.

> `1`/`"warn"` level is disallowed in any of our global configurations, only `0`/`"off"` or `2`/`"on"` are allowed.
