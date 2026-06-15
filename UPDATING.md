# Updating `@miniblox/protocol`

It's pretty simple since I have automated basically everything.

## Prerequisites

- [Deno](https://deno.com/), used for the dumper. TODO: rewrite the dumper in Rust
- [Bun](https://bun.com/), used for this. Technically you can use any JavaScript runtime, but my package scripts assume you're using Bun.
- A cat. Not required, but you need it anyway. Without a cat, your code might not build!
- [Miniblox/dumpers](https://codeberg.org/Miniblox/dumpers), you need it to update the protobuf definitions. This uses Deno.
- This repository.

## Protobuf update automations

- Grab the bundle you want to update the package to.
  - Open [Miniblox](https://miniblox.io/)
  - Go into devtools (F12 or Ctrl+Shift+I)
  - Press <kbd>Ctrl</kbd>+<kbd>F</kbd> and search for `src="/assets/index-`, the 1st result should be a `<script>` element with the bundle for the version you've loaded.
  - Right-click on the blue and underlined link that starts with `/assets/index-` and select "Copy link address"
  - Open that in a new tab or something, then press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the file. Go to where the dumpers repository is cloned,
    and make a `bundles` folder, then save the file and call it `miniblox.js`.
- Go into the dumper repository folder
- Run `deno task dumpToProtobuf` to update the protobuf definitions.
  They output in the `out` folder relative to your current working directory (where you ran the command from).
- Copy the protobuf definitions from `out` to the `proto` folder in this repository.
- `bun run build`, or publish the package to npm (given you have permission to do so).

## Manual updating

If there are any new packets added (basically never, last packets added were CPacketReconiliation and SPacketPlayerInput for the new ac),
you need to add them to [here](src/index.ts) in `SPACKET_MAP` or `CPACKET_MAP`.
