---
layout: default
last_tag: 4.5.1
last_commit: 2a7643329864259e6d866d521886d959800447f6
title: Delay VTX Disarm in Betaflight {{ page.last_tag }}
custom_css:
  - tab
custom_js:
  - tab
---
# How to delay digital VTX disarm in Betaflight {{ page.last_tag }}

If you want to add a configurable delay between disarming and DVR stopping recording, all you need to do is
- Back up your current settings using `diff all`
- Flash custom cloud build firmware (Enter commit **{{ page.commit }}** in the **Select Pull Request or Commit** field
    ![Flashing custom firmware](/images/custom_commit.png?raw=true "text")
- Restore your config dump

# Notes
- Even though the UI shows firmware version as 4.6.0-dev, **it will build {{ page.last_tag }} firmware**.
- You can change the delay using the **displayport_msp_disarm_delay** parameter, default is 5 seconds.
    ![Flashing custom firmware](/images/cli_param.png?raw=true "text")

