const PLANT_CATALOG = [
    { emoji: '🍅', name: 'Tomate', days: 90, water: 2, tip: 'Muito sol. Tutor quando crescer. Regue na base.' },
    { emoji: '🥒', name: 'Pepino', days: 60, water: 3, tip: 'Regar diariamente no verão. Colher antes de amarelecer.' },
    { emoji: '🥬', name: 'Alface', days: 45, water: 2, tip: 'Sombra parcial no verão. Cortar folhas exteriores.' },
    { emoji: '🧅', name: 'Cebola', days: 120, water: 1, tip: 'Rega moderada. Pronta quando a parte verde cair.' },
    { emoji: '🧄', name: 'Alho', days: 180, water: 1, tip: 'Plantar no outono. Colher quando as folhas secam.' },
    { emoji: '🫑', name: 'Pimento', days: 85, water: 2, tip: 'Calor. Excelente em estufa ou zona abrigada.' },
    { emoji: '🥕', name: 'Cenoura', days: 75, water: 2, tip: 'Solo fundo e solto. Semear diretamente.' },
    { emoji: '🫘', name: 'Feijão', days: 65, water: 2, tip: 'Semear após geadas. Treliça para variedades de guia.' },
    { emoji: '🥦', name: 'Brócolos', days: 90, water: 2, tip: 'Tempo fresco. Semear no verão para o outono.' },
    { emoji: '🌿', name: 'Ervas', days: 30, water: 1, tip: 'Cortar regularmente para estimular crescimento.' },
    { emoji: '🍓', name: 'Morango', days: 60, water: 2, tip: 'Remover guias para fortalecer a planta.' },
    { emoji: '🎃', name: 'Abóbora', days: 100, water: 2, tip: 'Muito espaço. Regar na base.' },
    { emoji: '🌶️', name: 'Malagueta', days: 90, water: 2, tip: 'Sol pleno. Muito produtiva em vasos.' },
    { emoji: '🥔', name: 'Batata', days: 100, water: 2, tip: 'Semear batata-semente. Regar na tuberização.' },
    { emoji: '🫛', name: 'Ervilha', days: 70, water: 2, tip: 'Inverno/primavera. Treliça obrigatória.' },
    { emoji: '🌽', name: 'Milho', days: 85, water: 2, tip: 'Blocos para boa polinização.' },
];
const SOWING_CAL = [
    { month: 'Janeiro', semear: ['Alface (estufa)', 'Tomate (estufa)', 'Pimento (estufa)'], transplantar: ['Couves'], colher: ['Alface', 'Espinafre', 'Couve'] },
    { month: 'Fevereiro', semear: ['Tomate (estufa)', 'Pimento (estufa)', 'Beringela'], transplantar: ['Alho francês'], colher: ['Alface', 'Ervilha', 'Couve'] },
    { month: 'Março', semear: ['Alface', 'Ervilha', 'Favas', 'Cenoura'], transplantar: ['Tomate (estufa)'], colher: ['Favas', 'Espinafre', 'Alho francês'] },
    { month: 'Abril', semear: ['Tomate', 'Pepino', 'Courgette', 'Feijão verde', 'Abóbora'], transplantar: ['Tomate', 'Pimento', 'Alface'], colher: ['Ervilha', 'Favas', 'Alface'] },
    { month: 'Maio', semear: ['Feijão', 'Pepino', 'Milho', 'Abóbora'], transplantar: ['Tomate', 'Pepino', 'Pimento', 'Beringela'], colher: ['Alface', 'Ervilha', 'Favas'] },
    { month: 'Junho', semear: ['Feijão verde', 'Alface (calor)'], transplantar: ['Feijão', 'Abóbora'], colher: ['Alface', 'Ervilha', 'Morango', 'Courgette'] },
    { month: 'Julho', semear: ['Alface outono', 'Brócolos', 'Couve'], transplantar: [], colher: ['Tomate', 'Pepino', 'Feijão verde', 'Pimento', 'Courgette'] },
    { month: 'Agosto', semear: ['Brócolos', 'Couve', 'Espinafre', 'Alface'], transplantar: ['Brócolos', 'Couve'], colher: ['Tomate', 'Pepino', 'Pimento', 'Milho'] },
    { month: 'Setembro', semear: ['Espinafre', 'Alface', 'Rúcula', 'Cenoura'], transplantar: ['Brócolos', 'Alface', 'Couve'], colher: ['Tomate', 'Abóbora', 'Pimento', 'Malagueta'] },
    { month: 'Outubro', semear: ['Alho', 'Cebola', 'Favas', 'Espinafre'], transplantar: ['Alho francês'], colher: ['Abóbora', 'Brócolos'] },
    { month: 'Novembro', semear: ['Favas', 'Ervilha', 'Alface (estufa)'], transplantar: ['Alho', 'Cebola'], colher: ['Brócolos', 'Couve', 'Alface'] },
    { month: 'Dezembro', semear: ['Ervilha (estufa)'], transplantar: ['Alho'], colher: ['Couve', 'Espinafre', 'Alface'] },
];
let state = { plants: [], tasks: [], waterLog: [], notes: '', harvests: [], selectedPlant: null, weather: null, location: null, forecast: null };
function loadState() {
    try {
        const s = JSON.parse(localStorage.getItem('horta_v3') || '{}');
        state.plants = s.plants || []; state.tasks = s.tasks || []; state.waterLog = s.waterLog || [];
        state.notes = s.notes || ''; state.harvests = s.harvests || [];
    } catch (e) { }
    if (!state.tasks.length) initDefaultTasks();
}
function saveState() {
    localStorage.setItem('horta_v3', JSON.stringify({
        plants: state.plants, tasks: state.tasks, waterLog: state.waterLog,
        notes: state.notes, harvests: state.harvests
    }));
}
function initDefaultTasks() {
    const t = new Date().toISOString().split('T')[0];
    state.tasks = [
        { id: 1, text: 'Regar as plantas do canteiro principal', tag: 'rega', done: false, date: t },
        { id: 2, text: 'Verificar sinais de pragas nas couves', tag: 'tratar', done: false, date: t },
        { id: 3, text: 'Semear alface para rotação', tag: 'semear', done: false, date: t },
    ];
}
function switchTab(name, btn) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
    if (name === 'calendar') renderCalendar();
    if (name === 'harvest') { renderHarvest(); updateHarvestPlantSelect(); }
}
function render() {
    renderPlants(); renderTasks(); renderWaterLog(); updateStats();
    document.getElementById('notesArea').value = state.notes;
}
function renderPlants() {
    const today = new Date();
    const skipWater = state.forecast && state.forecast[0]?.mm > 3;
    let html = '';
    state.plants.forEach((p, i) => {
        const dIn = Math.floor((today - new Date(p.plantedDate)) / 86400000);
        const pct = Math.min(100, Math.round((dIn / p.days) * 100));
        const nw = dIn % p.water === 0 && !skipWater;
        const ready = pct >= 100;
        html += `<div class="plant-card ${nw ? 'needs-water' : ''} ${dIn > 0 ? 'planted' : ''}" onclick="openDetail(${i})">
      <div class="status-dot ${ready ? 'ready' : nw ? 'water' : ''}"></div>
      <span class="pe">${p.emoji}</span>
      <div class="pn">${p.name}</div>
      <div class="pd">${ready ? '🌾 Pronta!' : `${pct}% — ${Math.max(0, p.days - dIn)}d`}</div>
    </div>`;
    });
    html += `<div class="add-plant-btn" onclick="openAddModal()"><span>＋</span><span class="lbl">Adicionar</span></div>`;
    document.getElementById('plantsGrid').innerHTML = html;
}
function renderTasks() {
    document.getElementById('tasksList').innerHTML = state.tasks.map((t, i) => `
    <div class="task-item ${t.done ? 'done' : ''}">
      <div class="task-check ${t.done ? 'checked' : ''}" onclick="toggleTask(${i})">${t.done ? '✓' : ''}</div>
      <span class="task-text">${t.text}</span>
      <span class="task-tag tag-${t.tag}">${t.tag}</span>
    </div>`).join('');
}
function renderWaterLog() {
    const today = new Date(); let html = '';
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today); d.setDate(d.getDate() - i);
        const key = d.toISOString().split('T')[0];
        const watered = state.waterLog.includes(key);
        const label = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][d.getDay()];
        html += `<div class="water-day ${watered ? 'watered' : ''} ${i === 0 ? 'today' : ''}" onclick="toggleWaterDay('${key}')">${i === 0 ? 'Hoje' : label}</div>`;
    }
    document.getElementById('waterRow').innerHTML = html;
}
function updateStats() {
    const today = new Date();
    const toWater = state.plants.filter(p => Math.floor((today - new Date(p.plantedDate)) / 86400000) % p.water === 0).length;
    const ready = state.plants.filter(p => Math.floor((today - new Date(p.plantedDate)) / 86400000) >= p.days).length;
    document.getElementById('statPlants').textContent = state.plants.length;
    document.getElementById('statWater').textContent = toWater;
    document.getElementById('statReady').textContent = ready;
}
function toggleTask(i) { state.tasks[i].done = !state.tasks[i].done; saveState(); renderTasks(); }
function addTask() {
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim(); if (!text) return;
    state.tasks.push({ id: Date.now(), text, tag: 'tratar', done: false, date: new Date().toISOString().split('T')[0] });
    input.value = ''; saveState(); renderTasks();
}
function toggleWaterDay(key) {
    const idx = state.waterLog.indexOf(key);
    if (idx >= 0) state.waterLog.splice(idx, 1); else state.waterLog.push(key);
    saveState(); renderWaterLog();
}
function saveNotes() { state.notes = document.getElementById('notesArea').value; saveState(); }
function openAddModal() {
    document.getElementById('plantOptions').innerHTML = PLANT_CATALOG.map((p, i) => `
    <div class="modal-plant-opt" onclick="selPlantOpt(${i})" id="popt_${i}">
      <span class="emoji">${p.emoji}</span><div class="name">${p.name}</div>
    </div>`).join('');
    document.getElementById('plantDateInput').value = new Date().toISOString().split('T')[0];
    state.selectedPlant = null;
    document.getElementById('addModal').classList.add('open');
}
function selPlantOpt(i) {
    document.querySelectorAll('.modal-plant-opt').forEach(el => el.classList.remove('selected'));
    document.getElementById('popt_' + i).classList.add('selected');
    state.selectedPlant = i;
    document.getElementById('plantNameInput').placeholder = PLANT_CATALOG[i].name;
}
function addPlant() {
    if (state.selectedPlant === null) { alert('Escolha uma planta!'); return; }
    const cat = PLANT_CATALOG[state.selectedPlant];
    const name = document.getElementById('plantNameInput').value.trim() || cat.name;
    const date = document.getElementById('plantDateInput').value || new Date().toISOString().split('T')[0];
    state.plants.push({ emoji: cat.emoji, name, days: cat.days, water: cat.water, tip: cat.tip, plantedDate: date, id: Date.now() });
    closeModal('addModal'); saveState(); render(); updateHarvestPlantSelect();
}
function openDetail(i) {
    const p = state.plants[i]; const today = new Date();
    const dIn = Math.floor((today - new Date(p.plantedDate)) / 86400000);
    const pct = Math.min(100, Math.round((dIn / p.days) * 100));
    document.getElementById('detailContent').innerHTML = `
    <div class="detail-header"><span class="big-emoji">${p.emoji}</span><h2>${p.name}</h2></div>
    <div class="detail-section"><label>Progresso</label>
      <p>${pct}% — ${Math.max(0, p.days - dIn)} dias até colheita</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div></div>
    <div class="detail-section"><label>Plantada em</label>
      <p>${new Date(p.plantedDate).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div>
    <div class="detail-section"><label>Rega</label><p>A cada ${p.water} dia${p.water > 1 ? 's' : ''}</p></div>
    <div class="detail-section"><label>Dica</label><p>${p.tip}</p></div>
    <div class="detail-section"><label>Dias na horta</label><p>${dIn} dias</p></div>
    <button class="btn-danger" onclick="removePlant(${i})">🗑️ Remover esta planta</button>
    <div class="modal-actions" style="margin-top:9px">
      <button class="btn-primary" onclick="closeModal('detailModal')">Fechar</button>
    </div>`;
    document.getElementById('detailModal').classList.add('open');
}
function removePlant(i) {
    if (!confirm('Remover esta planta?')) return;
    state.plants.splice(i, 1); closeModal('detailModal'); saveState(); render();
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
});
function getLocation() {
    if (!navigator.geolocation) { showWeatherError('Não suportado'); return; }
    document.getElementById('locate-btn').textContent = '⏳ A localizar…';
    navigator.geolocation.getCurrentPosition(pos => {
        state.location = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        fetchWeather(state.location.lat, state.location.lon);
    }, () => { document.getElementById('locate-btn').textContent = '📍 Localizar'; showWeatherError('Permissão negada'); });
}
async function fetchWeather(lat, lon) {
    try {
        const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weathercode,windspeed_10m,precipitation&daily=weathercode,temperature_2m_max,precipitation_sum&timezone=auto&forecast_days=7`);
        const d = await r.json(); const c = d.current;
        document.getElementById('wIcon').textContent = wIcon(c.weathercode);
        document.getElementById('wTemp').textContent = Math.round(c.temperature_2m) + '°C';
        document.getElementById('wDesc').textContent = wDesc(c.weathercode);
        document.getElementById('wHum').textContent = '💧 ' + c.relative_humidity_2m + '%';
        document.getElementById('wWind').textContent = '💨 ' + Math.round(c.windspeed_10m) + ' km/h';
        document.getElementById('wRain').textContent = '🌧️ ' + c.precipitation + 'mm';
        document.getElementById('wDetails').style.display = 'flex';
        document.getElementById('locate-btn').textContent = '🔄 Atualizar';
        const daily = d.daily;
        state.forecast = daily.time.map((t, i) => ({ date: t, wc: daily.weathercode[i], maxT: Math.round(daily.temperature_2m_max[i]), mm: daily.precipitation_sum[i] || 0 }));
        renderForecast();
        const rg = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const rd = await rg.json();
        const loc = rd.address?.city || rd.address?.town || rd.address?.village || rd.address?.county || 'Localização';
        document.getElementById('wLoc').textContent = '📍 ' + loc;
        state.weather = { temp: c.temperature_2m, hum: c.relative_humidity_2m, rain: c.precipitation, wc: c.weathercode, loc };
        updateTip(); updateSeason(); renderPlants();
    } catch (e) { showWeatherError('Erro de meteorologia'); }
}
function renderForecast() {
    if (!state.forecast) return;
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    document.getElementById('rainForecast').style.display = 'block';
    document.getElementById('rainDays').innerHTML = state.forecast.map((f, i) => {
        const d = new Date(f.date); const dn = i === 0 ? 'Hoje' : days[d.getDay()];
        const rainy = f.mm > 2;
        return `<div class="rain-day ${rainy ? 'rainy' : ''} ${i === 0 ? 'today-d' : ''}">
      <div class="rd-name">${dn}</div><div class="rd-icon">${wIcon(f.wc)}</div>
      <div class="rd-temp">${f.maxT}°</div><div class="rd-mm">${f.mm > 0 ? f.mm + 'mm' : ''}</div>
    </div>`;
    }).join('');
    const todayRain = state.forecast[0]?.mm > 3;
    const tomorrowRain = state.forecast[1]?.mm > 3;
    let adv = '';
    if (todayRain) adv = `<div class="skip-badge water">💧 Chuva hoje (${state.forecast[0].mm}mm) — não precisa de regar!</div>`;
    else if (tomorrowRain) adv = `<div class="skip-badge water">🌦️ Chuva amanhã — rega leve hoje</div>`;
    else if (state.forecast.every(f => f.mm < 2)) adv = `<div class="skip-badge sun">☀️ Sem chuva esta semana — mantenha rega regular</div>`;
    document.getElementById('rainAdvice').innerHTML = adv;
}
function showWeatherError(msg) { document.getElementById('wDesc').textContent = msg; document.getElementById('locate-btn').textContent = '📍 Localizar'; }
function wIcon(wc) { if (wc === 0) return '☀️'; if (wc <= 2) return '🌤️'; if (wc <= 45) return '🌥️'; if (wc <= 67) return '🌧️'; if (wc <= 77) return '❄️'; if (wc <= 82) return '🌦️'; return '⛈️'; }
function wDesc(wc) { if (wc === 0) return 'Céu limpo'; if (wc <= 2) return 'Parcialmente nublado'; if (wc <= 45) return 'Nublado'; if (wc <= 55) return 'Chuvisco'; if (wc <= 67) return 'Chuva'; if (wc <= 77) return 'Neve'; if (wc <= 82) return 'Aguaceiros'; return 'Trovoada'; }
function updateTip() {
    const w = state.weather; if (!w) return;
    let tip = '';
    if (w.rain > 2) tip = `Chuva de ${w.rain}mm hoje — pode saltar a rega! Aproveite para tratar das plantas.`;
    else if (w.temp > 28) tip = `Calor intenso (${Math.round(w.temp)}°C) — regue de manhã cedo ou ao entardecer. Proteja alfaces.`;
    else if (w.temp < 8) tip = `Frio (${Math.round(w.temp)}°C) — cubra as plantas sensíveis. Adie sementeiras.`;
    else if (w.hum > 80) tip = `Humidade elevada (${w.hum}%) — atenção a fungos e míldio. Ventile estufas.`;
    else tip = `Condições ideais! ${Math.round(w.temp)}°C e ${w.hum}% humidade. Bom dia para semear ou transplantar.`;
    document.getElementById('tipText').textContent = tip;
}
function updateSeason() {
    const m = new Date().getMonth();
    const ss = [
        { t: '❄️ Inverno — Janeiro', p: 'Mês de descanso. Prepare o solo com composto. Cultive couves, espinafres e alho francês.' },
        { t: '❄️ Inverno — Fevereiro', p: 'Semeie tomates e pimentos em estufa. Plante batata-semente. Limpe e repare ferramentas.' },
        { t: '🌸 Primavera — Março', p: 'Semeie favas, ervilhas e alfaces. Transplante sementeiras quando as geadas passarem.' },
        { t: '🌱 Primavera — Abril', p: 'Semear tomates, pepinos, courgettes e feijão verde. Prepare canteiros com composto.' },
        { t: '🌸 Primavera — Maio', p: 'Transplante tomates e pimentos para o exterior. Semeie milho e abóbora.' },
        { t: '☀️ Verão — Junho', p: 'Rega diária essencial. Colha alfaces antes de subirem. Coloque mulch para reter humidade.' },
        { t: '☀️ Verão — Julho', p: 'Época alta: tomates, pepinos, pimentos. Semeie alfaces de outono. Rega de manhã.' },
        { t: '☀️ Verão — Agosto', p: 'Continue colheitas de verão. Semeie brócolos e couves para o outono.' },
        { t: '🍂 Outono — Setembro', p: 'Transplante brócolos e couves. Semeie espinafres e rúcula. Colha abóboras.' },
        { t: '🍂 Outono — Outubro', p: 'Plante alho e cebola de outono. Limpe canteiros. Incorpore composto.' },
        { t: '🍂 Outono — Novembro', p: 'Proteja colheitas do frio. Plante árvores de fruto. Cubra solo com palha.' },
        { t: '❄️ Inverno — Dezembro', p: 'Planifique o próximo ano. Encomende sementes. Prepare rotação de culturas.' },
    ];
    document.getElementById('seasonTitle').textContent = ss[m].t;
    document.getElementById('seasonText').textContent = ss[m].p;
}
function renderCalendar() {
    const cur = new Date().getMonth();
    document.getElementById('calGrid').innerHTML = SOWING_CAL.map((m, i) => `
    <div class="cal-month">
      <h4 class="${i === cur ? 'cur' : ''}">${i === cur ? '📍 ' : ''}${m.month}</h4>
      ${m.semear.length ? `<div class="sow-cat"><div class="sow-label">Semear</div><div class="sow-chips">${m.semear.map(s => `<span class="sow-chip chip-s">${s}</span>`).join('')}</div></div>` : ''}
      ${m.transplantar.length ? `<div class="sow-cat"><div class="sow-label">Transplantar</div><div class="sow-chips">${m.transplantar.map(s => `<span class="sow-chip chip-t">${s}</span>`).join('')}</div></div>` : ''}
      ${m.colher.length ? `<div class="sow-cat"><div class="sow-label">Colher</div><div class="sow-chips">${m.colher.map(s => `<span class="sow-chip chip-c">${s}</span>`).join('')}</div></div>` : ''}
    </div>`).join('');
}
function updateHarvestPlantSelect() {
    const sel = document.getElementById('hPlant'); if (!sel) return;
    sel.innerHTML = '<option value="">— Planta —</option>' + PLANT_CATALOG.map(p => `<option value="${p.name}">${p.emoji} ${p.name}</option>`).join('');
}
function addHarvest() {
    const plant = document.getElementById('hPlant').value;
    const qty = parseFloat(document.getElementById('hQty').value);
    const unit = document.getElementById('hUnit').value;
    const date = document.getElementById('hDate').value || new Date().toISOString().split('T')[0];
    const note = document.getElementById('hNote').value.trim();
    if (!plant || !qty) { alert('Indique a planta e a quantidade.'); return; }
    const cat = PLANT_CATALOG.find(p => p.name === plant) || { emoji: '🌿' };
    state.harvests.unshift({ id: Date.now(), plant, emoji: cat.emoji, qty, unit, date, note });
    document.getElementById('hQty').value = ''; document.getElementById('hNote').value = '';
    saveState(); renderHarvest();
}
function renderHarvest() {
    const totalKg = state.harvests.reduce((a, h) => a + (h.unit === 'kg' ? h.qty : h.unit === 'g' ? h.qty / 1000 : 0), 0);
    const counts = {}; state.harvests.forEach(h => { counts[h.plant] = (counts[h.plant] || 0) + 1; });
    const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    document.getElementById('hsTotalKg').textContent = totalKg.toFixed(1);
    document.getElementById('hsTotalItems').textContent = state.harvests.length;
    document.getElementById('hsBestPlant').textContent = best ? PLANT_CATALOG.find(p => p.name === best[0])?.emoji || '🌿' : '—';
    const list = document.getElementById('harvestList');
    if (!state.harvests.length) {
        list.innerHTML = `<div class="empty-state"><div class="es-icon">🌾</div><p>Ainda não há colheitas.<br>Registe a sua primeira colheita acima!</p></div>`; return;
    }
    list.innerHTML = state.harvests.map((h, i) => `
    <div class="harvest-item">
      <div class="he">${h.emoji}</div>
      <div class="hi"><div class="hn">${h.plant}</div>
        <div class="hm">${new Date(h.date).toLocaleDateString('pt-PT', { day: 'numeric', month: 'short' })}${h.note ? ' · ' + h.note : ''}</div>
      </div>
      <div style="text-align:right"><div class="hq">${h.qty}</div><div class="hu">${h.unit}</div></div>
      <div onclick="removeHarvest(${i})" style="cursor:pointer;color:#c4814a;font-size:0.9rem;padding:4px">✕</div>
    </div>`).join('');
}
function removeHarvest(i) {
    if (!confirm('Remover este registo?')) return;
    state.harvests.splice(i, 1); saveState(); renderHarvest();
}
loadState(); updateSeason(); render(); renderCalendar(); updateHarvestPlantSelect();
document.getElementById('hDate').value = new Date().toISOString().split('T')[0];