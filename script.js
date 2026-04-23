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
const STORAGE_KEY = 'horta_v6';
// Zonas: 'todos' = geral PT, 'nc' = Norte e Centro, 's' = Sul (Alentejo/Algarve)
const SOWING_CAL = [
    {
        month: 'Janeiro',
        semear:        ['Fava', 'Ervilha', 'Alface (estufa)', 'Rabanete', 'Pimento (estufa)', 'Pepino (estufa)', 'Meloa (estufa)'],
        semear_nc:     ['Couve galega', 'Nabo', 'Nabiça', 'Salsa', 'Tomate (abrigado)'],
        semear_s:      ['Cenoura', 'Couves', 'Feijão', 'Nabiça', 'Tomate'],
        transplantar:  ['Cebola'],
        colher:        ['Alface', 'Espinafre', 'Couve', 'Couve-flor', 'Brócolos'],
        dica:    '🌙 Lua minguante ideal para poda de fruteiras. Lua crescente para enxertos e novas plantações.',
        dica_nc: '🌙 Geadas frequentes — proteja sementeiros e abrigue plantas sensíveis. Só semear ao exterior em locais muito protegidos.',
        dica_s:  '🌙 Clima mais ameno permite avançar com tomate e feijão ao ar livre. Batata precoce pode ser plantada nas zonas sem geadas.'
    },
    {
        month: 'Fevereiro',
        semear:        ['Alho-francês', 'Beterraba', 'Cebola', 'Coentro', 'Couve-flor', 'Couve de grelo', 'Espinafre', 'Fava', 'Rabanete', 'Salsa'],
        semear_nc:     ['Alface', 'Couves', 'Nabo', 'Nabiça', 'Pimento', 'Repolho', 'Feijão', 'Pepino', 'Tomate', 'Melancia'],
        semear_s:      ['Abóbora', 'Cenoura', 'Ervilha', 'Feijão', 'Nabiça', 'Pepino', 'Tomate', 'Melancia'],
        transplantar:  ['Alho-francês', 'Batata (a colher em Junho)'],
        transplantar_nc: ['Cebola (a colher em Maio/Junho)', 'Couves (semeadas em Dezembro)'],
        colher:        ['Espinafre', 'Couve-flor', 'Brócolos', 'Cenoura (abrigo)', 'Couves de Bruxelas'],
        dica:    '🌙 Cuide de pessegueiros e macieiras antes do abrolhamento. Plantas bem regadas resistem melhor às geadas tardias.',
        dica_nc: '🌙 Ainda há risco de gelo — inicie tomates e pimentos apenas em estufa aquecida. Transplante cebolas em dias sem geada.',
        dica_s:  '🌙 Pode semear ao exterior com bom êxito. Avance com abóboras, ervilhas e pepinos em terreno bem drenado.'
    },
    {
        month: 'Março',
        semear:        ['Alface', 'Ervilha', 'Fava', 'Cenoura', 'Abóbora', 'Beterraba', 'Espinafre', 'Feijão', 'Melancia', 'Melão', 'Pepino', 'Salsa', 'Tomate', 'Couve', 'Nabiça'],
        transplantar:  ['Tomate (estufa)', 'Cebola (a colher em Maio/Junho)'],
        colher:        ['Fava', 'Espinafre', 'Alho-francês', 'Cebola branca', 'Rabanete'],
        dica:    '🌙 Termine as podas antes de as fruteiras florescerem. Monte tutores para feijões e ervilhas. Primeiros tratamentos preventivos contra oídio e míldio.',
        dica_nc: '🌙 Aguarde o fim das geadas antes de transplantar para o exterior. Nas regiões de altitude, aguarde ainda por Abril.',
        dica_s:  '🌙 Já pode transplantar tomates endurecidos para local definitivo. Boa altura para estabelecer morangueiros novos.'
    },
    {
        month: 'Abril',
        semear:        ['Tomate', 'Pepino', 'Abóbora', 'Feijão verde', 'Batata', 'Beterraba', 'Brócolos', 'Cenoura', 'Couve', 'Fava', 'Milho', 'Grão-de-bico', 'Melão', 'Melancia', 'Nabo', 'Pimento', 'Rabanete', 'Salsa'],
        transplantar:  ['Tomate', 'Pimento', 'Alface', 'Cebola (viveiro)', 'Pepino (viveiro)'],
        colher:        ['Ervilha', 'Fava', 'Alface', 'Rabanete', 'Espinafre'],
        dica:    '🌙 Mondas e sachas regulares são essenciais. Semeie na lua crescente para melhor pega. Boa época para plantar espargos e morangueiros.',
        dica_nc: '🌙 Nas terras mais altas, plante a batata apenas no final do mês quando a ameaça de geada tiver passado.',
        dica_s:  '🌙 Nas terras mais secas, a batata entra no terreno a partir de meados do mês. Regue os batatais regularmente desde cedo.'
    },
    {
        month: 'Maio',
        semear:        ['Feijão', 'Pepino', 'Milho', 'Abóbora', 'Agrião', 'Alface', 'Beterraba', 'Brócolos', 'Cenoura', 'Espinafre', 'Melão', 'Nabo', 'Pimento', 'Rabanete', 'Repolho', 'Girassol', 'Soja'],
        transplantar:  ['Tomate', 'Pepino', 'Pimento', 'Beringela', 'Abóbora'],
        colher:        ['Alface', 'Ervilha', 'Fava', 'Espinafre', 'Morango'],
        dica:    '🌙 Aplique caldas cúpricas preventivas. Regue sempre de manhã cedo. Limpe a vegetação seca em redor da horta.',
        dica_nc: '🌙 Mês seguro para transplantação a descoberto em todo o Norte e Centro. Inicie a rega regular dos batatais.',
        dica_s:  '🌙 Calor crescente — mulch nos canteiros e regas frequentes. Inicie transplantação do arroz nas zonas de regadio.'
    },
    {
        month: 'Junho',
        semear:        ['Feijão verde', 'Alface (variedades de calor)', 'Alho-porro', 'Repolho', 'Salsa', 'Couves de Bruxelas', 'Nabo', 'Cenoura', 'Rábano'],
        transplantar:  ['Feijão', 'Abóbora', 'Alho-porro', 'Repolho'],
        colher:        ['Alface', 'Ervilha', 'Morango', 'Alho', 'Beterraba', 'Beringela', 'Cebola', 'Batata temporã', 'Aipo (fim do mês)', 'Melão (fim do mês)'],
        dica:    '🌙 Rega só nas horas frescas — manhã ou fim da tarde. Cave e areje os canteiros entre culturas. Mulch reduz evaporação.',
        dica_nc: '🌙 Início do verão — colha alfaces antes de subirem. Cebolas prontas quando a rama cair naturalmente.',
        dica_s:  '🌙 Calor intenso: regas diárias obrigatórias ao amanhecer. Colha cedo de manhã para manter frescura dos produtos.'
    },
    {
        month: 'Julho',
        semear:        ['Alface (outono)', 'Brócolos', 'Couve', 'Agrião', 'Alho-porro', 'Salsa', 'Couves de Bruxelas', 'Nabo', 'Cenoura'],
        transplantar:  ['Brócolos', 'Repolho'],
        colher:        ['Tomate', 'Pepino', 'Feijão verde', 'Pimento', 'Abóbora', 'Alface', 'Alho', 'Beterraba', 'Beringela', 'Cebola', 'Milho', 'Espinafre verão'],
        dica:    '🌙 Regue antes das 8h ou depois das 19h. Verifique diariamente o milho. Colha a batata do inverno antes de o solo secar.',
        dica_nc: '🌙 Mês de ceifa dos cereais. Aproveite para preparar os canteiros que ficam livres com composto para o outono.',
        dica_s:  '🌙 Calor máximo — minimize o stress hídrico. Colha pela manhã e mantenha os produtos à sombra imediatamente após.'
    },
    {
        month: 'Agosto',
        semear:        ['Brócolos', 'Couve', 'Espinafre', 'Alface', 'Agrião', 'Feijão', 'Nabo', 'Rabanete', 'Repolho inverno', 'Salsa', 'Acelga', 'Couve-nabo', 'Ervilha (estufa)'],
        transplantar:  ['Brócolos', 'Couve', 'Alface'],
        colher:        ['Tomate', 'Pepino', 'Pimento', 'Milho', 'Feijão verde', 'Beringela', 'Abóbora'],
        dica:    '🌙 Solo seco prejudica raízes e sabor dos frutos — rega regular e frequente. Retire algum folhame da videira para que os cachos apanhem sol.',
        dica_nc: '🌙 Aproveite os dias mais frescos do fim do mês para semear espinafres e rúcula. Brócolos semeados agora darão em novembro.',
        dica_s:  '🌙 Mês mais quente — foque-se nas colheitas e evite novas sementeiras expostas ao sol. Prefira o canteiro coberto com sombra parcial.'
    },
    {
        month: 'Setembro',
        semear:        ['Espinafre', 'Alface', 'Rúcula', 'Cenoura', 'Agrião', 'Chicória', 'Nabo', 'Rabanete', 'Repolho', 'Salsa', 'Acelga', 'Alho-porro', 'Cebola'],
        transplantar:  ['Brócolos', 'Alface', 'Couve', 'Morangueiros'],
        colher:        ['Tomate', 'Abóbora', 'Pimento', 'Malagueta', 'Feijão', 'Cebola (semente)', 'Milho', 'Amêndoa'],
        dica:    '🌙 Com as primeiras chuvas, plante morangueiros novos e regue até pegarem. Incorpore composto antes das sementeiras de outono.',
        dica_nc: '🌙 Fim das colheitas de verão no Norte — liberte canteiros e semeie espinafres e rúcula para o outono e inverno.',
        dica_s:  '🌙 No Sul há ainda colheitas de verão até ao fim do mês. Semeie ao ar livre com as primeiras chuvas de setembro.'
    },
    {
        month: 'Outubro',
        semear:        ['Alho', 'Cebola', 'Fava', 'Espinafre', 'Agrião', 'Cenoura', 'Rabanete'],
        transplantar:  ['Alho-francês', 'Morangueiros', 'Couve primavera', 'Alface inverno'],
        colher:        ['Abóbora', 'Brócolos', 'Feijão', 'Pimento', 'Tomate tardio', 'Azeitona (início)'],
        dica:    '🌙 Limpe canteiros após culturas de verão e incorpore composto. Colha azeitona no momento certo. Proteja do primeiro gelo.',
        dica_nc: '🌙 Geadas possíveis a partir de meados do mês nas zonas de interior — resguarde canteiros e transplante alfaces para abrigo.',
        dica_s:  '🌙 Nos lugares mais secos e abrigados, plante oliveiras jovens. Início da vindima e colheita de amêndoa nas zonas quentes.'
    },
    {
        month: 'Novembro',
        semear:        ['Fava', 'Ervilha', 'Alface (abrigado)', 'Agrião', 'Cenoura', 'Couve', 'Tremoço'],
        semear_nc:     ['Cereais de pragana (aveia, centeio, cevada, trigo)'],
        semear_s:      ['Batata (zonas secas)', 'Beterraba', 'Cebola', 'Nabo', 'Rabanete', 'Tomate (estufa)'],
        transplantar:  ['Alho', 'Cebola', 'Couve temporã'],
        colher:        ['Brócolos', 'Couve', 'Alface', 'Azeitona', 'Beterraba'],
        dica:    '🌙 Cubra o solo com palha para proteger raízes do frio. Plante novas árvores de fruto com a seiva em repouso.',
        dica_nc: '🌙 Estaque as plantas altas antes das tempestades de inverno. Pomares devem ser estercados no crescente e podados no minguante.',
        dica_s:  '🌙 Nas zonas mais secas e quentes é ainda possível plantar batata. Semeie em covas aquecidas para melhores resultados.'
    },
    {
        month: 'Dezembro',
        semear:        ['Agrião (abrigado)', 'Espinafre (abrigado)', 'Alface (abrigado)', 'Fava (abrigado)', 'Ervilha (estufa)'],
        semear_nc:     [],
        semear_s:      ['Cebola', 'Couves', 'Beterraba', 'Nabiça', 'Pimentos (estufa)', 'Tomate (estufa)', 'Salsa'],
        transplantar:  ['Alho', 'Macieiras', 'Pereiras'],
        colher:        ['Couve', 'Espinafre', 'Alface', 'Brócolos', 'Alho-francês'],
        dica:    '🌙 Balanço anual: planeie rotações, encomende sementes e prepare o composto. Poda da vinha no minguante.',
        dica_nc: '🌙 Mês de repouso forçado pelo frio — apenas sementeiros abrigados ou estufa aquecida. Reveja e conserte os sistemas de rega.',
        dica_s:  '🌙 O Sul permite ainda sementeiras diversas em dezembro se não houver geadas. Aproveite os dias mais amenos para trabalhar os canteiros.'
    },
];
let state = {
    plants: [], tasks: [], waterLog: [], notes: '', harvests: [], selectedPlant: null,
    weather: null, location: null, forecast: null, zone: 'todos', customCatalog: [], fertilizerLogs: [], pestLogs: [],
    beds: [], selectedBed: 'all', reminders: { enabled: false, time: '08:00', lastSentDate: '' }
};
let reminderTimer = null;

function defaultBed() {
    return { id: 'bed_default', name: 'Geral', createdAt: new Date().toISOString() };
}

function uid(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getAllPlantsCatalog() {
    return [...PLANT_CATALOG, ...(state.customCatalog || [])];
}

function ensurePlantIds() {
    state.plants = state.plants.map(p => ({ ...p, id: p.id || uid('plant') }));
}

function ensureBeds() {
    if (!Array.isArray(state.beds)) state.beds = [];
    state.beds = state.beds
        .filter(b => b && b.id && b.name)
        .map(b => ({ ...b, name: String(b.name).trim() || 'Sem nome' }));

    if (!state.beds.length) state.beds = [defaultBed()];

    const validBedIds = new Set(state.beds.map(b => b.id));
    const fallbackBedId = state.beds[0].id;
    state.plants = state.plants.map(p => ({
        ...p,
        bedId: validBedIds.has(p.bedId) ? p.bedId : fallbackBedId
    }));

    if (state.selectedBed !== 'all' && !validBedIds.has(state.selectedBed)) {
        state.selectedBed = 'all';
    }
}

function ensureReminders() {
    const raw = state.reminders || {};
    state.reminders = {
        enabled: Boolean(raw.enabled),
        time: /^\d{2}:\d{2}$/.test(String(raw.time || '')) ? String(raw.time) : '08:00',
        lastSentDate: String(raw.lastSentDate || '')
    };
}

function ensurePestLogs() {
    if (!Array.isArray(state.pestLogs)) state.pestLogs = [];
    state.pestLogs = state.pestLogs.map(log => ({
        id: log.id || uid('pest'),
        plantId: log.plantId,
        date: log.date || new Date().toISOString().split('T')[0],
        issue: log.issue || 'Outro',
        treatment: log.treatment || '',
        status: log.status === 'resolvido' ? 'resolvido' : 'ativo',
        resolvedAt: log.resolvedAt || ''
    }));
}

function getBedName(bedId) {
    return state.beds.find(b => b.id === bedId)?.name || 'Geral';
}

function getVisiblePlants() {
    if (state.selectedBed === 'all') return state.plants;
    return state.plants.filter(p => p.bedId === state.selectedBed);
}

function bedOptionsHtml(selectedBedId) {
    return state.beds.map(b => `<option value="${b.id}" ${b.id === selectedBedId ? 'selected' : ''}>${b.name}</option>`).join('');
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('horta_v5') || localStorage.getItem('horta_v4') || localStorage.getItem('horta_v3') || '{}';
        const s = JSON.parse(raw);
        state.plants = s.plants || [];
        state.tasks = s.tasks || [];
        state.waterLog = s.waterLog || [];
        state.notes = s.notes || '';
        state.harvests = s.harvests || [];
        state.zone = s.zone || 'todos';
        state.customCatalog = s.customCatalog || [];
        state.fertilizerLogs = s.fertilizerLogs || [];
        state.pestLogs = s.pestLogs || [];
        state.beds = s.beds || [];
        state.selectedBed = s.selectedBed || 'all';
        state.reminders = s.reminders || { enabled: false, time: '08:00', lastSentDate: '' };
    } catch (e) { }
    ensurePlantIds();
    ensureBeds();
    ensureReminders();
    ensurePestLogs();
    if (!state.tasks.length) initDefaultTasks();
}
function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        plants: state.plants, tasks: state.tasks, waterLog: state.waterLog,
        notes: state.notes, harvests: state.harvests, zone: state.zone,
        customCatalog: state.customCatalog, fertilizerLogs: state.fertilizerLogs, pestLogs: state.pestLogs,
        beds: state.beds, selectedBed: state.selectedBed,
        reminders: state.reminders
    }));
}
function setZone(z, btn) {
    state.zone = z;
    saveState();
    document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCalendar();
}
function mergeZone(base, nc, s, zone) {
    const b = (base || []).map(n => ({ n, z: 'todos' }));
    if (zone === 'nc') return [...b, ...(nc || []).map(n => ({ n, z: 'nc' }))];
    if (zone === 's')  return [...b, ...(s  || []).map(n => ({ n, z: 's' }))];
    // 'todos': mostrar tudo com badges regionais
    return [...b, ...(nc || []).map(n => ({ n, z: 'nc' })), ...(s || []).map(n => ({ n, z: 's' }))];
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
    renderBedsUI();
    renderRemindersUI();
    document.getElementById('notesArea').value = state.notes;
}
function renderPlants() {
    const today = new Date();
    const skipWater = state.forecast && state.forecast[0]?.mm > 3;
    const visiblePlants = getVisiblePlants();
    let html = '';
    visiblePlants.forEach((p) => {
        const i = state.plants.findIndex(x => x.id === p.id);
        const dIn = Math.floor((today - new Date(p.plantedDate)) / 86400000);
        const pct = Math.min(100, Math.round((dIn / p.days) * 100));
        const nw = dIn % p.water === 0 && !skipWater;
        const ready = pct >= 100;
        const fertOverdue = isFertilizationOverdue(p, today);
                const pestOpen = hasOpenPestIssue(p.id);
        html += `<div class="plant-card ${nw ? 'needs-water' : ''} ${dIn > 0 ? 'planted' : ''} ${fertOverdue ? 'needs-fertilizer' : ''}" onclick="openDetail(${i})">
      <div class="status-dot ${ready ? 'ready' : nw ? 'water' : ''}"></div>
      ${fertOverdue ? '<div class="fert-badge" title="Fertilizacao em atraso">🧪</div>' : ''}
            ${pestOpen ? '<div class="pest-badge" title="Praga ou doenca ativa">🐛</div>' : ''}
      <span class="pe">${p.emoji}</span>
      <div class="pn">${p.name}</div>
      <div class="pb">${getBedName(p.bedId)}</div>
      <div class="pd">${ready ? '🌾 Pronta!' : `${pct}% — ${Math.max(0, p.days - dIn)}d`}</div>
    </div>`;
    });
    if (!visiblePlants.length) {
        html += `<div class="empty-state"><div class="es-icon">🪴</div><p>Sem plantas neste canteiro.</p></div>`;
    }
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
    const visiblePlants = getVisiblePlants();
    const toWater = visiblePlants.filter(p => Math.floor((today - new Date(p.plantedDate)) / 86400000) % p.water === 0).length;
    const ready = visiblePlants.filter(p => Math.floor((today - new Date(p.plantedDate)) / 86400000) >= p.days).length;
    document.getElementById('statPlants').textContent = visiblePlants.length;
    document.getElementById('statWater').textContent = toWater;
    document.getElementById('statReady').textContent = ready;
}
function renderBedsUI() {
    const bedFilter = document.getElementById('bedFilterSelect');
    if (bedFilter) {
        bedFilter.innerHTML = '<option value="all">Todos os canteiros</option>' + state.beds.map(b => `<option value="${b.id}">${b.name}</option>`).join('');
        bedFilter.value = state.selectedBed;
    }

    const summary = document.getElementById('bedSummaryList');
    if (!summary) return;
    summary.innerHTML = state.beds.map(b => {
        const total = state.plants.filter(p => p.bedId === b.id).length;
        return `<div class="bed-item">
      <div class="bed-main">
        <div class="bed-name">${b.name}</div>
        <div class="bed-count">${total} planta${total === 1 ? '' : 's'}</div>
      </div>
      <div class="bed-actions">
        <button class="tool-btn" onclick="renameBedPrompt('${b.id}')">Renomear</button>
        <button class="tool-btn" onclick="removeBed('${b.id}')">Remover</button>
      </div>
    </div>`;
    }).join('');
}

function setBedFilter(value) {
    state.selectedBed = value || 'all';
    saveState();
    renderPlants();
    updateStats();
}

function addBed() {
    const input = document.getElementById('newBedInput');
    const name = input.value.trim();
    if (!name) return;
    const alreadyExists = state.beds.some(b => b.name.toLowerCase() === name.toLowerCase());
    if (alreadyExists) { alert('Já existe um canteiro com esse nome.'); return; }
    state.beds.push({ id: uid('bed'), name, createdAt: new Date().toISOString() });
    input.value = '';
    saveState();
    render();
}

function renameBedPrompt(bedId) {
    const bed = state.beds.find(b => b.id === bedId);
    if (!bed) return;
    const next = prompt('Novo nome do canteiro:', bed.name);
    if (next === null) return;
    const name = next.trim();
    if (!name) return;
    const dup = state.beds.some(b => b.id !== bedId && b.name.toLowerCase() === name.toLowerCase());
    if (dup) { alert('Já existe um canteiro com esse nome.'); return; }
    bed.name = name;
    saveState();
    render();
}

function removeBed(bedId) {
    if (state.beds.length <= 1) { alert('Tem de existir pelo menos um canteiro.'); return; }
    const used = state.plants.some(p => p.bedId === bedId);
    if (used) { alert('Não pode remover um canteiro com plantas associadas.'); return; }
    state.beds = state.beds.filter(b => b.id !== bedId);
    if (state.selectedBed === bedId) state.selectedBed = 'all';
    saveState();
    render();
}

function notificationSupport() {
    return typeof window !== 'undefined' && 'Notification' in window;
}

function renderRemindersUI() {
    const status = document.getElementById('reminderStatus');
    const enabled = document.getElementById('reminderEnabled');
    const time = document.getElementById('reminderTime');
    if (!status || !enabled || !time) return;

    enabled.checked = !!state.reminders.enabled;
    time.value = state.reminders.time;

    if (!notificationSupport()) {
        status.textContent = 'Este navegador não suporta notificações web.';
        return;
    }

    const perm = Notification.permission;
    if (perm === 'granted') {
        status.textContent = state.reminders.enabled
            ? `Lembrete ativo às ${state.reminders.time}.`
            : 'Permissão ativa. Ative o lembrete diário quando quiser.';
    } else if (perm === 'denied') {
        status.textContent = 'Permissão bloqueada no navegador.';
    } else {
        status.textContent = 'Permissão pendente. Clique em Permissão para ativar notificações.';
    }
}

async function requestNotificationPermission() {
    if (!notificationSupport()) {
        alert('Este navegador não suporta notificações.');
        return;
    }
    try {
        const result = await Notification.requestPermission();
        if (result !== 'granted' && state.reminders.enabled) {
            state.reminders.enabled = false;
        }
        saveState();
        renderRemindersUI();
    } catch (e) {
        alert('Não foi possível pedir a permissão de notificações.');
    }
}

async function toggleReminders(checked) {
    if (checked && !notificationSupport()) {
        alert('Este navegador não suporta notificações.');
        document.getElementById('reminderEnabled').checked = false;
        return;
    }
    if (checked && Notification.permission !== 'granted') {
        await requestNotificationPermission();
        if (Notification.permission !== 'granted') {
            state.reminders.enabled = false;
            saveState();
            renderRemindersUI();
            return;
        }
    }
    state.reminders.enabled = !!checked;
    saveState();
    renderRemindersUI();
    checkDailyReminder();
}

function updateReminderTime(value) {
    if (!/^\d{2}:\d{2}$/.test(String(value || ''))) return;
    state.reminders.time = value;
    saveState();
    renderRemindersUI();
    checkDailyReminder();
}

function reminderTodayKey(now = new Date()) {
    return now.toISOString().split('T')[0];
}

function isReminderTimeReached(now = new Date()) {
    const [h, m] = state.reminders.time.split(':').map(Number);
    const cur = now.getHours() * 60 + now.getMinutes();
    const target = h * 60 + m;
    return cur >= target;
}

function reminderSummary() {
    const now = new Date();
    const skipWater = state.forecast && state.forecast[0]?.mm > 3;
    const toWater = skipWater
        ? 0
        : state.plants.filter(p => Math.floor((now - new Date(p.plantedDate)) / 86400000) % p.water === 0).length;
    const ready = state.plants.filter(p => Math.floor((now - new Date(p.plantedDate)) / 86400000) >= p.days).length;
    const pendingTasks = state.tasks.filter(t => !t.done).length;

    const parts = [];
    if (toWater > 0) parts.push(`${toWater} para regar`);
    if (ready > 0) parts.push(`${ready} prontas para colher`);
    if (pendingTasks > 0) parts.push(`${pendingTasks} tarefas pendentes`);
    if (!parts.length) {
        return skipWater
            ? 'Hoje não precisa de regar. Chuva prevista e horta em ordem.'
            : 'Sem alertas urgentes hoje. Bom trabalho na horta.';
    }
    return `Hoje: ${parts.join(' · ')}.`;
}

function showReminderNotification(message, isTest = false) {
    if (!notificationSupport() || Notification.permission !== 'granted') return;
    const title = isTest ? 'Horta — Teste de lembrete' : 'Horta — Lembrete diário';
    const body = isTest ? `Teste OK. ${message}` : message;
    new Notification(title, {
        body,
        icon: 'icons/icon-192.svg',
        badge: 'icons/icon-192.svg'
    });
}

function checkDailyReminder() {
    if (!state.reminders.enabled) return;
    if (!notificationSupport()) return;
    if (Notification.permission !== 'granted') return;
    if (!isReminderTimeReached()) return;

    const today = reminderTodayKey();
    if (state.reminders.lastSentDate === today) return;

    showReminderNotification(reminderSummary(), false);
    state.reminders.lastSentDate = today;
    saveState();
    renderRemindersUI();
}

function testReminder() {
    if (!notificationSupport()) {
        alert('Este navegador não suporta notificações.');
        return;
    }
    if (Notification.permission !== 'granted') {
        alert('Ative primeiro a permissão de notificações.');
        return;
    }
    showReminderNotification(reminderSummary(), true);
}

function setupReminderLoop() {
    if (reminderTimer) clearInterval(reminderTimer);
    reminderTimer = setInterval(checkDailyReminder, 30000);
    checkDailyReminder();
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
        const catalog = getAllPlantsCatalog();
        document.getElementById('plantOptions').innerHTML = catalog.map((p, i) => `
    <div class="modal-plant-opt" onclick="selPlantOpt(${i})" id="popt_${i}">
      <span class="emoji">${p.emoji}</span><div class="name">${p.name}</div>
    </div>`).join('');
    document.getElementById('plantDateInput').value = new Date().toISOString().split('T')[0];
        document.getElementById('plantBedInput').innerHTML = bedOptionsHtml(state.beds[0].id);
    state.selectedPlant = null;
    document.getElementById('addModal').classList.add('open');
}
function selPlantOpt(i) {
    const catalog = getAllPlantsCatalog();
    document.querySelectorAll('.modal-plant-opt').forEach(el => el.classList.remove('selected'));
    document.getElementById('popt_' + i).classList.add('selected');
    state.selectedPlant = i;
    document.getElementById('plantNameInput').placeholder = catalog[i].name;
}
function addPlant() {
    if (state.selectedPlant === null) { alert('Escolha uma planta!'); return; }
    const cat = getAllPlantsCatalog()[state.selectedPlant];
    const name = document.getElementById('plantNameInput').value.trim() || cat.name;
    const date = document.getElementById('plantDateInput').value || new Date().toISOString().split('T')[0];
    const bedId = document.getElementById('plantBedInput').value || state.beds[0].id;
    state.plants.push({ emoji: cat.emoji, name, days: cat.days, water: cat.water, tip: cat.tip, plantedDate: date, id: uid('plant'), bedId });
    closeModal('addModal'); saveState(); render(); updateHarvestPlantSelect();
}

function openCustomPlantModal() {
    document.getElementById('customEmojiInput').value = '';
    document.getElementById('customNameInput').value = '';
    document.getElementById('customDaysInput').value = '';
    document.getElementById('customWaterInput').value = '';
    document.getElementById('customTipInput').value = '';
    document.getElementById('customPlantModal').classList.add('open');
}

function createCustomPlant() {
    const emoji = document.getElementById('customEmojiInput').value.trim() || '🌱';
    const name = document.getElementById('customNameInput').value.trim();
    const days = parseInt(document.getElementById('customDaysInput').value, 10);
    const water = parseInt(document.getElementById('customWaterInput').value, 10);
    const tip = document.getElementById('customTipInput').value.trim() || 'Observe o crescimento e adapte a rega ao clima.';

    if (!name) { alert('Indique o nome da planta.'); return; }
    if (!Number.isInteger(days) || days <= 0) { alert('Indique dias ate colheita validos.'); return; }
    if (!Number.isInteger(water) || water <= 0) { alert('Indique uma frequencia de rega valida.'); return; }

    state.customCatalog.push({ id: uid('custom'), emoji, name, days, water, tip, custom: true });
    saveState();
    closeModal('customPlantModal');
    openAddModal();
}

function getPlantFertilizations(plantId) {
    return (state.fertilizerLogs || [])
        .filter(log => log.plantId === plantId)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function isFertilizationOverdue(plant, today = new Date()) {
    const plantedDays = Math.floor((today - new Date(plant.plantedDate)) / 86400000);
    if (plantedDays < 14) return false;
    const ferts = getPlantFertilizations(plant.id);
    if (!ferts.length) return plantedDays >= 21;
    const daysSinceLast = Math.floor((today - new Date(ferts[0].date)) / 86400000);
    return daysSinceLast >= 21;
}

function getPlantPestLogs(plantId) {
    return (state.pestLogs || [])
        .filter(log => log.plantId === plantId)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function hasOpenPestIssue(plantId) {
    return getPlantPestLogs(plantId).some(log => log.status !== 'resolvido');
}

function openDetail(i) {
    const p = state.plants[i]; const today = new Date();
    const dIn = Math.floor((today - new Date(p.plantedDate)) / 86400000);
    const pct = Math.min(100, Math.round((dIn / p.days) * 100));
    const ferts = getPlantFertilizations(p.id);
    const pestLogs = getPlantPestLogs(p.id);
    const lastFert = ferts[0]?.date ? new Date(ferts[0].date).toLocaleDateString('pt-PT') : 'Sem registos';
    const fertHistory = ferts.slice(0, 4).map(f =>
        `<div class="fert-item">${new Date(f.date).toLocaleDateString('pt-PT')} · ${f.type}${f.qty ? ` (${f.qty})` : ''}</div>`
    ).join('') || '<div class="fert-empty">Sem fertilizacao registada.</div>';
    const lastIssue = pestLogs[0] ? `${pestLogs[0].issue} (${pestLogs[0].status})` : 'Sem registos';
    const pestHistory = pestLogs.slice(0, 6).map(log => {
        const status = log.status === 'resolvido'
            ? `Resolvido${log.resolvedAt ? ' em ' + new Date(log.resolvedAt).toLocaleDateString('pt-PT') : ''}`
            : 'Ativo';
        return `<div class="pest-item ${log.status === 'resolvido' ? 'resolved' : 'open'}">
      <div><strong>${new Date(log.date).toLocaleDateString('pt-PT')} · ${log.issue}</strong></div>
      <div>${log.treatment || 'Sem tratamento indicado.'}</div>
      <div class="pest-meta">${status}</div>
    </div>`;
    }).join('') || '<div class="fert-empty">Sem pragas/doencas registadas.</div>';

    document.getElementById('detailContent').innerHTML = `
    <div class="detail-header"><span class="big-emoji">${p.emoji}</span><h2>${p.name}</h2></div>
    <div class="detail-section"><label>Progresso</label>
      <p>${pct}% — ${Math.max(0, p.days - dIn)} dias até colheita</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div></div>
    <div class="detail-section"><label>Plantada em</label>
      <p>${new Date(p.plantedDate).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</p></div>
    <div class="detail-section"><label>Rega</label><p>A cada ${p.water} dia${p.water > 1 ? 's' : ''}</p></div>
    <div class="detail-section"><label>Dica</label><p>${p.tip}</p></div>
        <div class="detail-section"><label>Canteiro</label>
            <div class="fert-row">
                <select id="plantBedSelect_${i}" class="modal-input" style="margin-bottom:0">${bedOptionsHtml(p.bedId)}</select>
            </div>
            <button class="btn-tertiary" style="margin-top:8px;width:100%" onclick="movePlantToBed(${i})">Mover de canteiro</button>
        </div>
    <div class="detail-section"><label>Dias na horta</label><p>${dIn} dias</p></div>
        <div class="detail-section"><label>Ultima fertilizacao</label><p>${lastFert}</p></div>
        <div class="detail-section">
            <label>Registo de fertilizacao</label>
            <div class="fert-row">
                <input id="fertDate_${i}" type="date" value="${new Date().toISOString().split('T')[0]}">
                <input id="fertType_${i}" type="text" placeholder="Tipo (ex: NPK 10-10-10)">
                <input id="fertQty_${i}" type="text" placeholder="Qtd (ex: 20g)">
            </div>
            <button class="btn-tertiary" style="margin-top:8px;width:100%" onclick="addFertilization(${i})">Guardar fertilizacao</button>
            <div class="fert-list">${fertHistory}</div>
        </div>
        <div class="detail-section">
            <label>Pragas e doencas</label>
            <p style="margin-bottom:8px">Ultimo registo: ${lastIssue}</p>
            <div class="fert-row">
                <input id="pestDate_${i}" type="date" value="${new Date().toISOString().split('T')[0]}">
                <select id="pestIssue_${i}" class="modal-input" style="margin-bottom:0">
                    <option value="Afidios">Afidios</option>
                    <option value="Oidio">Oidio</option>
                    <option value="Caracois">Caracois</option>
                    <option value="Mildio">Mildio</option>
                    <option value="Lagarta">Lagarta</option>
                    <option value="Mosca branca">Mosca branca</option>
                    <option value="Outro">Outro</option>
                </select>
                <input id="pestTreatment_${i}" type="text" placeholder="Tratamento aplicado">
                <select id="pestStatus_${i}" class="modal-input" style="margin-bottom:0">
                    <option value="ativo">Ativo</option>
                    <option value="resolvido">Resolvido</option>
                </select>
            </div>
            <button class="btn-tertiary" style="margin-top:8px;width:100%" onclick="addPestLog(${i})">Guardar registo</button>
            <div class="pest-list">${pestHistory}</div>
        </div>
    <button class="btn-danger" onclick="removePlant(${i})">🗑️ Remover esta planta</button>
    <div class="modal-actions" style="margin-top:9px">
      <button class="btn-primary" onclick="closeModal('detailModal')">Fechar</button>
    </div>`;
    document.getElementById('detailModal').classList.add('open');
}

function movePlantToBed(i) {
    const p = state.plants[i];
    const select = document.getElementById(`plantBedSelect_${i}`);
    if (!p || !select) return;
    p.bedId = select.value;
    saveState();
    render();
    openDetail(i);
}

function addFertilization(i) {
        const p = state.plants[i];
        const date = document.getElementById(`fertDate_${i}`).value || new Date().toISOString().split('T')[0];
        const type = document.getElementById(`fertType_${i}`).value.trim();
        const qty = document.getElementById(`fertQty_${i}`).value.trim();
        if (!type) { alert('Indique o tipo de fertilizante.'); return; }
        state.fertilizerLogs.unshift({ id: uid('fert'), plantId: p.id, date, type, qty });
        saveState();
        openDetail(i);
}

function addPestLog(i) {
    const p = state.plants[i];
    const date = document.getElementById(`pestDate_${i}`).value || new Date().toISOString().split('T')[0];
    const issue = document.getElementById(`pestIssue_${i}`).value || 'Outro';
    const treatment = document.getElementById(`pestTreatment_${i}`).value.trim();
    const status = document.getElementById(`pestStatus_${i}`).value === 'resolvido' ? 'resolvido' : 'ativo';

    state.pestLogs.unshift({
        id: uid('pest'),
        plantId: p.id,
        date,
        issue,
        treatment,
        status,
        resolvedAt: status === 'resolvido' ? new Date().toISOString().split('T')[0] : ''
    });
    saveState();
    openDetail(i);
}

function removePlant(i) {
    if (!confirm('Remover esta planta?')) return;
        const plantId = state.plants[i].id;
        state.plants.splice(i, 1);
        state.fertilizerLogs = state.fertilizerLogs.filter(f => f.plantId !== plantId);
    state.pestLogs = state.pestLogs.filter(log => log.plantId !== plantId);
        closeModal('detailModal'); saveState(); render();
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
    }, () => { document.getElementById('locate-btn').textContent = '📍 GPS'; showWeatherError('Permissão negada'); });
}
async function searchLocation() {
    const input = document.getElementById('locationInput');
    const query = input.value.trim();
    if (!query) return;
    input.disabled = true;
    document.getElementById('search-loc-btn').textContent = '⏳';
    try {
        const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=pt,es,fr,gb,de,it`);
        const d = await r.json();
        if (!d.length) { showWeatherError('Local não encontrado'); return; }
        state.location = { lat: parseFloat(d[0].lat), lon: parseFloat(d[0].lon) };
        fetchWeather(state.location.lat, state.location.lon);
        input.value = '';
    } catch (e) { showWeatherError('Erro na pesquisa'); }
    finally { input.disabled = false; document.getElementById('search-loc-btn').textContent = '🔍'; }
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
        { t: '❄️ Inverno — Janeiro', p: 'A horta descansa, mas há muito a fazer: enriqueça o solo com composto, reveja ferramentas e plante couves, espinafres e alho-francês. Nas zonas mais quentes, avance com a batata precoce.' },
        { t: '❄️ Inverno — Fevereiro', p: 'Inicie tomates e pimentos em sementeiro aquecido. Plante batata-semente nas regiões mais amenas — estará pronta em junho. Aproveite os dias solarengos para tratar fruteiras antes do abrolhamento.' },
        { t: '🌸 Primavera — Março', p: 'A horta acorda: semeie favas, ervilhas, cenouras e alfaces ao ar livre. Monte tutores para trepadeiras. Transplante as sementeiras de estufa assim que o risco de geada diminuir.' },
        { t: '🌱 Primavera — Abril', p: 'Mês de grande atividade — semeie tomates, pepinos, abóboras e feijão verde. Enriqueça os canteiros com composto. Boa época para estabelecer espargos e morangueiros.' },
        { t: '🌸 Primavera — Maio', p: 'Leve os tomates e pimentos endurecidos para o exterior. Semeie milho em bloco para boa polinização. Regue de manhã e aplique tratamentos preventivos contra míldio.' },
        { t: '☀️ Verão — Junho', p: 'Rega diária obrigatória nas horas frescas. Colha alfaces antes de subirem à semente e cebolas quando a rama cair. Cubra os canteiros com mulch para reduzir evaporação.' },
        { t: '☀️ Verão — Julho', p: 'Auge das colheitas: tomates, pepinos e pimentos em força. Aproveite para semear alfaces e brócolos de outono. Rega ao amanhecer é a regra de ouro neste mês.' },
        { t: '☀️ Verão — Agosto', p: 'Continue as colheitas de verão sem pausas. Semeie couves, espinafres e rabanetes para o outono. Rega irregular resseca o solo e quebra a qualidade dos frutos.' },
        { t: '🍂 Outono — Setembro', p: 'Transplante brócolos e couves para os canteiros de outono. Semeie espinafres, rúcula e agrião. Com as primeiras chuvas, estabeleça novos morangueiros e colha abóboras maduras.' },
        { t: '🍂 Outono — Outubro', p: 'Plante alho e cebola de outono para colher no verão seguinte. Limpe os canteiros após as culturas de verão e incorpore composto. Proteja espécies sensíveis das primeiras geadas noturnas.' },
        { t: '🍂 Outono — Novembro', p: 'Abrigue as culturas mais sensíveis ao frio. Plante novas árvores de fruto enquanto a seiva descansa. Cubra o solo com palha para proteger as raízes do frio intenso.' },
        { t: '❄️ Inverno — Dezembro', p: 'Altura de fazer o balanço anual: reveja rotações, encomende sementes e prepare o composto para a primavera. Organize a horta e guarde utensílios antes do inverno profundo.' },
    ];
    document.getElementById('seasonTitle').textContent = ss[m].t;
    document.getElementById('seasonText').textContent = ss[m].p;
}
function renderCalendar() {
    const cur = new Date().getMonth();
    const zone = state.zone || 'todos';
    const zoneLabel = { nc: '🌧️ N/C', s: '☀️ Sul' };

    function chips(items, chipClass) {
        return items.map(({ n, z }) => {
            const badge = (zone === 'todos' && z !== 'todos') ? ` <span class="chip-zone">${zoneLabel[z]}</span>` : '';
            const zClass = z !== 'todos' ? ` zone-${z}` : '';
            return `<span class="sow-chip ${chipClass}${zClass}">${n}${badge}</span>`;
        }).join('');
    }

    document.getElementById('calGrid').innerHTML = SOWING_CAL.map((m, i) => {
        const semear       = mergeZone(m.semear, m.semear_nc, m.semear_s, zone);
        const transplantar = mergeZone(m.transplantar, m.transplantar_nc, undefined, zone);
        const colher       = mergeZone(m.colher, undefined, undefined, zone);
        const dica = (zone === 'nc' && m.dica_nc) ? m.dica_nc : (zone === 's' && m.dica_s) ? m.dica_s : m.dica;

        return `<div class="cal-month">
      <h4 class="${i === cur ? 'cur' : ''}">${i === cur ? '📍 ' : ''}${m.month}</h4>
      ${semear.length ? `<div class="sow-cat"><div class="sow-label">Semear</div><div class="sow-chips">${chips(semear, 'chip-s')}</div></div>` : ''}
      ${transplantar.length ? `<div class="sow-cat"><div class="sow-label">Transplantar</div><div class="sow-chips">${chips(transplantar, 'chip-t')}</div></div>` : ''}
      ${colher.length ? `<div class="sow-cat"><div class="sow-label">Colher</div><div class="sow-chips">${chips(colher, 'chip-c')}</div></div>` : ''}
      ${dica ? `<div class="sow-almanac">${dica}</div>` : ''}
    </div>`;
    }).join('');
}
function updateHarvestPlantSelect() {
    const sel = document.getElementById('hPlant'); if (!sel) return;
    const catalog = getAllPlantsCatalog();
    sel.innerHTML = '<option value="">— Planta —</option>' + catalog.map(p => `<option value="${p.name}">${p.emoji} ${p.name}</option>`).join('');
}
function addHarvest() {
    const plant = document.getElementById('hPlant').value;
    const qty = parseFloat(document.getElementById('hQty').value);
    const unit = document.getElementById('hUnit').value;
    const date = document.getElementById('hDate').value || new Date().toISOString().split('T')[0];
    const note = document.getElementById('hNote').value.trim();
    if (!plant || !qty) { alert('Indique a planta e a quantidade.'); return; }
    const cat = getAllPlantsCatalog().find(p => p.name === plant) || { emoji: '🌿' };
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
    document.getElementById('hsBestPlant').textContent = best ? getAllPlantsCatalog().find(p => p.name === best[0])?.emoji || '🌿' : '—';
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

function exportData(format) {
    const stamp = new Date().toISOString().slice(0, 10);
    if (format === 'json') {
        const payload = {
            version: 6,
            exportedAt: new Date().toISOString(),
            plants: state.plants,
            tasks: state.tasks,
            waterLog: state.waterLog,
            notes: state.notes,
            harvests: state.harvests,
            zone: state.zone,
            customCatalog: state.customCatalog,
            fertilizerLogs: state.fertilizerLogs,
            pestLogs: state.pestLogs,
            beds: state.beds,
            selectedBed: state.selectedBed,
            reminders: state.reminders
        };
        downloadFile(`horta-backup-${stamp}.json`, JSON.stringify(payload, null, 2), 'application/json');
        return;
    }

    const csvSections = [
        toCsv('plants', ['id', 'name', 'emoji', 'plantedDate', 'days', 'water', 'tip', 'bedId'], state.plants),
        toCsv('harvests', ['id', 'plant', 'emoji', 'qty', 'unit', 'date', 'note'], state.harvests),
        toCsv('tasks', ['id', 'text', 'tag', 'done', 'date'], state.tasks),
        toCsv('fertilizer', ['id', 'plantId', 'date', 'type', 'qty'], state.fertilizerLogs),
        toCsv('pests', ['id', 'plantId', 'date', 'issue', 'treatment', 'status', 'resolvedAt'], state.pestLogs),
        toCsv('beds', ['id', 'name', 'createdAt'], state.beds),
        toCsv('customCatalog', ['id', 'name', 'emoji', 'days', 'water', 'tip', 'custom'], state.customCatalog),
        toCsv('waterLog', ['date'], state.waterLog.map(date => ({ date }))),
        toCsv('notes', ['note'], [{ note: state.notes }]),
        toCsv('meta', ['zone', 'selectedBed', 'reminderEnabled', 'reminderTime', 'lastReminderDate'], [{
            zone: state.zone,
            selectedBed: state.selectedBed,
            reminderEnabled: state.reminders.enabled,
            reminderTime: state.reminders.time,
            lastReminderDate: state.reminders.lastSentDate
        }]),
    ];
    downloadFile(`horta-export-${stamp}.csv`, csvSections.join('\n\n'), 'text/csv');
}

function toCsv(section, fields, rows) {
    const head = `# ${section}\n${fields.join(',')}`;
    const body = (rows || []).map(row => fields.map(f => csvCell(row[f])).join(',')).join('\n');
    return `${head}\n${body}`;
}

function csvCell(value) {
    const str = value === undefined || value === null ? '' : String(value);
    return `"${str.replace(/"/g, '""')}"`;
}

function downloadFile(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function triggerImport() {
    const input = document.getElementById('importFile');
    input.value = '';
    input.click();
}

function importData(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        try {
            const content = String(reader.result || '');
            const imported = parseImportedData(content, file.name || '');
            state.plants = imported.plants || [];
            state.tasks = imported.tasks || [];
            state.waterLog = imported.waterLog || [];
            state.notes = imported.notes || '';
            state.harvests = imported.harvests || [];
            state.zone = imported.zone || 'todos';
            state.customCatalog = imported.customCatalog || [];
            state.fertilizerLogs = imported.fertilizerLogs || [];
            state.pestLogs = imported.pestLogs || [];
            state.beds = imported.beds || [];
            state.selectedBed = imported.selectedBed || 'all';
            state.reminders = imported.reminders || { enabled: false, time: '08:00', lastSentDate: '' };
            ensurePlantIds();
            ensureBeds();
            ensureReminders();
            ensurePestLogs();
            saveState();
            render();
            renderCalendar();
            renderHarvest();
            updateHarvestPlantSelect();
            alert('Backup importado com sucesso.');
        } catch (err) {
            alert('Ficheiro de backup invalido. Use um JSON ou CSV exportado pela app.');
        }
    };
    reader.readAsText(file);
}

function parseImportedData(content, fileName) {
    const lower = String(fileName || '').toLowerCase();
    if (lower.endsWith('.csv')) return parseCsvExport(content);

    try {
        return JSON.parse(content || '{}');
    } catch (jsonErr) {
        return parseCsvExport(content);
    }
}

function parseCsvExport(content) {
    const lines = String(content || '').replace(/\r/g, '').split('\n');
    const sections = {};
    let i = 0;

    while (i < lines.length) {
        const line = (lines[i] || '').trim();
        if (!line) {
            i++;
            continue;
        }
        if (!line.startsWith('# ')) {
            i++;
            continue;
        }

        const section = line.slice(2).trim();
        const headerLine = (lines[i + 1] || '').trim();
        const headers = headerLine ? headerLine.split(',') : [];
        const rows = [];
        i += 2;

        while (i < lines.length && !lines[i].startsWith('# ')) {
            const rowLine = lines[i] || '';
            if (rowLine.trim()) {
                const values = parseCsvLine(rowLine);
                const row = {};
                headers.forEach((h, idx) => {
                    row[h] = coerceCsvValue(values[idx]);
                });
                rows.push(row);
            }
            i++;
        }

        sections[section] = rows;
    }

    return {
        plants: sections.plants || [],
        harvests: sections.harvests || [],
        tasks: sections.tasks || [],
        fertilizerLogs: sections.fertilizer || [],
        pestLogs: sections.pests || [],
        beds: sections.beds || [],
        customCatalog: sections.customCatalog || [],
        waterLog: (sections.waterLog || []).map(r => r.date).filter(Boolean),
        notes: sections.notes?.[0]?.note || '',
        zone: sections.meta?.[0]?.zone || 'todos',
        selectedBed: sections.meta?.[0]?.selectedBed || 'all',
        reminders: {
            enabled: !!sections.meta?.[0]?.reminderEnabled,
            time: sections.meta?.[0]?.reminderTime || '08:00',
            lastSentDate: sections.meta?.[0]?.lastReminderDate || ''
        }
    };
}

function parseCsvLine(line) {
    const out = [];
    let cur = '';
    let q = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (q && line[i + 1] === '"') {
                cur += '"';
                i++;
            } else {
                q = !q;
            }
            continue;
        }
        if (ch === ',' && !q) {
            out.push(cur);
            cur = '';
            continue;
        }
        cur += ch;
    }
    out.push(cur);
    return out;
}

function coerceCsvValue(value) {
    const str = value === undefined || value === null ? '' : String(value);
    if (str === 'true') return true;
    if (str === 'false') return false;
    if (str !== '' && /^-?\d+(\.\d+)?$/.test(str)) return Number(str);
    return str;
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { });
    });
}

loadState();
// Restaurar botão de zona ativo
document.querySelectorAll('.zone-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.zone === state.zone);
});
updateSeason(); render(); renderCalendar(); updateHarvestPlantSelect();
document.getElementById('hDate').value = new Date().toISOString().split('T')[0];
registerServiceWorker();
setupReminderLoop();