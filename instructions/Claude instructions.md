# Claude Instructions

## File Management Rules

- Backup `.md` files are stored in backup folders - these are for reference only to check original state
- Do not refer to or modify backup files unless specifically needed to check the original state
- Always work with the current active files in their proper locations
- When converting documentation, work with files in their actual content locations (e.g., `src/content/docs/`)

## Link Management Rules

- When you see links to Zeroheight (zeroheight.com), replace them with internal documentation links
- Search for the corresponding component or pattern in the `/src/content/docs/` directory
- Use relative paths like `/components/containers/drawer/` or `/components/layout/split-layout/`
- Always verify the internal documentation exists before creating the link