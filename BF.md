# How to delay VTX disarm in BF

If you want to add a configurable delay between you disarm and DVR stops recording, all you need to do is
- Back up your current settings using `diff all`
- Flash custom cloud build firmware (Enter commit **e4238b29950d1c2a86aefa2fdf2e6b8747d45fb5** in the **Select Pull Request or Commit** field
    ![Flashing custom firmware](/images/custom_commit.png?raw=true "text")
- Restore your config dump

# Notes
- Even though the UI shows firmware version as 4.6.0-dev, **it will build 4.5.1 firmware**.
- You can change the delay using the **displayport_msp_disarm_delay** parameter, default is 5 seconds.
    ![Flashing custom firmware](/images/cli_param.png?raw=true "text")

