---
layout: default
title: Delay VTX Disarm in Betaflight {{ page.FIXME_TAG }}
custom_css:
  - tabs
custom_js:
  - tabs
---
{% for version in site.data.bf.patched_versions %}

{: .tab-title .tabgroup-{{forloop.index}} .tab-hide }
{{ version.tag }}

{: .tab-content .tabgroup-{{forloop.index}} .tab-hide }

# How to delay digital VTX disarm in Betaflight {{ version.tag }}

If you want to add a configurable delay between disarming and DVR stopping recording, all you need to do is
- Back up your current settings using `diff all`
- Flash custom cloud build firmware (Enter commit **{{ version.commit }}** in the **Select Pull Request or Commit** field
    ![Flashing custom firmware](/images/custom_commit.png?raw=true "text")
- Restore your config dump

# Notes
- Even though the UI shows firmware version as 4.6.0-dev, **it will build {{ version.tag }} firmware**.
- You can change the delay using the **displayport_msp_disarm_delay** parameter, default is 5 seconds.
    ![Flashing custom firmware](/images/cli_param.png?raw=true "text")

{% endfor %}
