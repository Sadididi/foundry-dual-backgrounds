Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
  const actor = app.actor;
  const secondBg = actor.getFlag("dual-backgrounds", "background2") || "";

  const traitsElem = html.find(".traits");

  if (traitsElem.length && !html.find(".dual-background").length) {
    const backgroundHtml = `
      <div class="dual-background">
        <label for="background2">Second Background:</label>
        <input type="text" name="background2" value="\${secondBg}" placeholder="Enter second background" style="width: 100%;"/>
      </div>
    `;
    traitsElem.append(backgroundHtml);

    html.find('input[name="background2"]').change(async function () {
      const value = this.value.trim();
      await actor.setFlag("dual-backgrounds", "background2", value);
    });
  }
});