---
stage: Create
group: Code Creation
info: To determine the technical writer assigned to the Stage/Group associated with this page, see https://handbook.gitlab.com/handbook/product/ux/technical-writing/#assignments
description: "Troubleshooting tips for common problems in Code Suggestions."
---

# Troubleshooting Code Suggestions

DETAILS:
**Tier:** Premium with GitLab Duo Pro, Ultimate with GitLab Duo Pro or Enterprise - [Start a trial](https://about.gitlab.com/solutions/gitlab-duo-pro/sales/?type=free-trial)
**Offering:** GitLab.com, Self-managed, GitLab Dedicated

> - Changed to require GitLab Duo add-on in GitLab 17.6 and later.

When working with GitLab Duo Code Suggestions, you might encounter the following issues.

You can run a [health check](../../../gitlab_duo/turn_on_off.md) to test if your instance meets the requirements to run Code Suggestions.

## Suggestions are not displayed

If suggestions are not displayed, follow these steps:

1. Ensure you have [installed a supported IDE extension](supported_extensions.md#supported-editor-extensions)
1. Ensure your administrator has [assigned you a seat](../../../../subscriptions/subscription-add-ons.md#assign-gitlab-duo-seats).

If suggestions are still not displayed, try the following troubleshooting steps.

### Suggestions not displayed in VS Code or GitLab Web IDE

If you are a self-managed user, ensure that Code Suggestions for the [GitLab Web IDE](../../../project/web_ide/index.md) is enabled. The same settings apply to VS Code as local IDE.

1. On the left sidebar, select **Extensions > GitLab Workflow**.
1. Select **Settings** (**{settings}**), and then select **Extension Settings**.
1. In **GitLab > Duo Code Suggestions**, select the **GitLab Duo Code Suggestions**
   checkbox.

### View Code Suggestions logs

If the settings are enabled, but suggestions are still not displayed, try the following steps:

1. In the GitLab Workflow **Extension Settings**, enable **GitLab: Debug**.
1. On the top menu, select **View > Output** to open the bottom panel, then either:
   - In the command palette, select `GitLab: Show Extension Logs`.
   - In the bottom panel, on the right, select the dropdown list to filter the logs. Select **GitLab Workflow**.
1. In the GitLab Workflow **Extension Settings**, clear and re-select the **GitLab Duo Code Suggestions** checkbox.

### Suggestions not displayed in JetBrains IDEs

1. Ensure you have properly [set up the extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-intellij-plugin#setup).
1. From the **Tools > GitLab Duo** menu, select **Verify setup**. Make sure the health check passes.
1. Verify that your JetBrains IDE natively supports the language of the file you are
   working on. Go to **Settings** > **Languages & Frameworks** to see the full list of
   languages and frameworks supported by your JetBrains IDE.

### Suggestions not displayed in Microsoft Visual Studio

1. Ensure you have properly [set up the extension](https://gitlab.com/gitlab-org/editor-extensions/gitlab-visual-studio-extension#setup).
1. From the **Tools > Options** menu, find the **GitLab** option. Ensure **Log Level** is set to **Debug**.
1. Open the extension log in **View > Output** and change the dropdown list to **GitLab Extension** as the log filter.
1. Verify that the debug log contains similar output:

```shell
14:48:21:344 GitlabProposalSource.GetCodeSuggestionAsync
14:48:21:344 LsClient.SendTextDocumentCompletionAsync("GitLab.Extension.Test\TestData.cs", 34, 0)
14:48:21:346 LS(55096): time="2023-07-17T14:48:21-05:00" level=info msg="update context"
```

## Code Suggestions returns a 401 error

Code Suggestions [depends on a license token](../../../ai_features.md) that
[synchronizes your subscription](../../../../administration/license.md) with GitLab.

If the token expires, GitLab Duo Code Suggestions returns the following error
with status `401` when the token has expired:

```plaintext
Token validation failed in Language Server:
(Failed to check token: Error: Fetching Information about personal access token
```

If GitLab has access to the [cloud server](../../../ai_features.md), try
[manually synchronizing your license](../../../../subscriptions/self_managed/index.md#manually-synchronize-subscription-data).

## Authentication troubleshooting

If the above steps do not solve your issue, the problem may be related to the recent changes in authentication,
specifically the token system. To resolve the issue:

1. Remove the existing personal access token from your GitLab account settings.
1. Reauthorize your GitLab account in VS Code using OAuth.
1. Test the Code Suggestions feature with different file extensions to verify if the issue is resolved.
