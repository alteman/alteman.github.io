# How to delay VTX disarm in BF

If you want to add a configurable delay between you disarm and DVR stops recording, all you need to do is
- flash a custom cloud build firmware (Enter commit **dfb0739be0846f3f2120333d9162df086a1af7c7** in the **Select Pull Request or Commit** field
    ![Flashing custom firmware](/images/custom_commit.png?raw=true "text")
- and set the **displayport_msp_disarm_delay** parameter to delay in seconds
    ![Flashing custom firmware](/images/cli_param.png?raw=true "text")
- Don't forget to type **save** :)

