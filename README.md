# Discord Mute Bot

## Introduction
This Discord bot allows you to mute and unmute all members in a voice channel with a simple command.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- Discord Bot Token (Replace `' Replace with your token'` in the code with your actual Discord Bot Token)

## Installation
1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/ezPG/mute_bot.git
    ```

2. Navigate to the project directory:

    ```bash
    cd mute_bot
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Replace `' Replace with your token'` in the `client.login` line in `main.js` with your actual Discord Bot Token.

## Usage
1. Run the bot:

    ```bash
    node main.js
    ```

2. Invite the bot to your Discord server.

3. Use the following commands in your Discord server:
    - `!mute-all`: Mutes all members in the voice channel where the command is executed.
    - `!unmute-all`: Unmutes all members in the voice channel where the command is executed.

**Note:** Make sure the bot has the necessary permissions to mute and unmute members in voice channels.
