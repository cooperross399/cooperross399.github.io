# CLAUDE.md — the hub (cooperross399.github.io)

The landing page for the labs. `lib/sports.js` and `lib/format.js` are the files
the NHL, EPL and CBB boards serve, pinned to a tag of
`cooperross399/betting-lab-shared` in `shared.lock.json` and checked by the
Shared files workflow.

## Design drops

- Branches named design/** come from Claude Design, in nhl-betting-lab only; there they may change only page files (see nhl-betting-lab/.github/workflows/design-drop-guard.yml) and auto-merge on green. Never rebase or edit them by hand; ask Claude Design for a new drop instead. The two shared libraries reach this repository as a `shared-sync/<tag>` pull request opened by nhl-betting-lab's Design Drop workflow, copying the tag byte for byte and re-pinning `shared.lock.json`; it merges itself when every check passes. Do not edit those branches either.
