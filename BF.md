# How to delay VTX disarm in Betaflight 4.5.1

If you want to add a configurable delay between you disarm and DVR stops recording, all you need to do is
- Back up your current settings using `diff all`
- Flash custom cloud build firmware (Enter commit **2a7643329864259e6d866d521886d959800447f6** in the **Select Pull Request or Commit** field
    ![Flashing custom firmware](/images/custom_commit.png?raw=true "text")
- Restore your config dump

# Notes
- Even though the UI shows firmware version as 4.6.0-dev, **it will build 4.5.1 firmware**.
- You can change the delay using the **displayport_msp_disarm_delay** parameter, default is 5 seconds.
    ![Flashing custom firmware](/images/cli_param.png?raw=true "text")

