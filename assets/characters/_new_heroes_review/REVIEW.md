# 🏛️ New Hero Models — Overnight Generation (review me)

**4 of 4 rigged + running Greek-hero models generated successfully, fully via Meshy API (no Mixamo, no Chrome needed).**

| Hero | File | Status | Thumbnail |
|------|------|--------|-----------|
| Hermes   | `hermes_run.glb`   | ✅ rigged + RunFast run cycle | `hermes_thumb.png` |
| Spartan  | `spartan_run.glb`  | ✅ rigged + RunFast run cycle | `spartan_thumb.png` |
| Atalanta | `atalanta_run.glb` | ✅ rigged + RunFast run cycle | `atalanta_thumb.png` |
| Apollo   | `apollo_run.glb`   | ✅ rigged + RunFast run cycle | `apollo_thumb.png` |

Each GLB: 1 skeleton (skins=1), 1 animation clip (`Armature|RunFast|baselayer`), ~1.4–1.5 MB. Verified by parsing the GLB.

## How to preview (30 seconds)
**Option A — see them run:** drag any `*_run.glb` into https://gltf-viewer.donmccurdy.com and press play. You'll see the full run loop.
**Option B — quick look:** open the `*_thumb.png` files (static T-pose render of each character).

## What these are
- Generated from text prompts (chibi Greek heroes, T-pose) → Meshy text-to-3D → Meshy rigging → Meshy "RunFast" mocap animation.
- The original `hero_hermes.png` art was used for the FIRST attempt (image-to-3D) but came out frozen mid-stride and **unriggable** — so these are text-generated T-pose versions that rig + animate cleanly. Faces won't be a pixel-perfect match to that art; judge if the style is close enough.

## NOT done yet (waiting on your review)
- ❌ Nothing wired into the game engine
- ❌ No build, no deploy
- These are standalone files for you to approve a look first. Once you pick which to use, next step is: wire chosen GLB(s) into `src/assets.js` as new heroes + set the back-view camera + per-hero scale, then build + deploy.

## Pipeline notes
- Meshy run animation = `action_id 16` (RunFast). Fallbacks: 15 (Run_03), 14 (Run_02).
- Atalanta's first mesh failed Meshy's pose-estimation (arms not clean T) → auto-retried with a stronger T-pose prompt → succeeded. Retry logic is in `/tmp/hermes/run_pipeline.py`.
- Credits: started ~3990, ended ~3700. (~189 wasted early on an action_id probing mistake — noted, won't repeat.)
- All raw working files: `/tmp/hermes/heroes/`
