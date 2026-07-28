// Custom GSAP eases for Vaultix. Call window.registerVaultixEases() after gsap + CustomEase load.
window.registerVaultixEases = function () {
  if (window._vaultixEasesRegistered) return
  const { gsap, CustomEase } = window
  if (!gsap || !CustomEase) return
  gsap.registerPlugin(CustomEase)
  CustomEase.create("vaultixStructure", "0.7, 0, 0.2, 1")
  CustomEase.create("vaultixReveal", "0.16, 1, 0.3, 1")
  CustomEase.create("vaultixDecor", "0.34, 1.3, 0.64, 1")
  CustomEase.create("vaultixExit", "0.4, 0, 1, 1")
  window._vaultixEasesRegistered = true
}
