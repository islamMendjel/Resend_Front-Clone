# Motion & Interactive Specifications (Resend Clone)

1. **Hero 3D Rubik's Cube**: Uses `@splinetool/react-spline` loading `/assets/cube.splinecode` with `/assets/cube-fallback.jpg` as placeholder. Slow continuous rotation and interactive hover/drag response.
2. **3D Section Icons (Envelope, Sphere, Atom, Shield)**: MP4 video loops (`3d-integrate-night.mp4`, etc.) with `.jpg` fallbacks (`3d-broadcast-fallback.jpg`, `3d-react-fallback.jpg`, `3d-control-fallback.jpg`) using `mix-blend-mode: screen` on pure `#000000`.
3. **Button Texture & Hover**: Primary CTA buttons use `texture-btn.png` overlay with a 150ms ease-out border transition from `#292d30` to `#ffffff`.
4. **Testimonials Marquee**: Infinite horizontal CSS keyframe scroll (`translateX(0)` to `translateX(-50%)`), pausing on hover.
