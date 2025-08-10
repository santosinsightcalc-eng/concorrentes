import React, { useState, useEffect } from 'react';
import { Search, FileText, TrendingUp, Users, DollarSign, Activity, Calendar, AlertCircle, CheckCircle, XCircle, ChevronDown, ChevronRight, BarChart3, PieChart, Target, Zap } from 'lucide-react';

const KnowledgeSystem = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedDrug, setSelectedDrug] = useState('both');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Dados dos medicamentos baseados na pesquisa
  const drugData = {
    semaglutida: {
      name: 'Semaglutida',
      brands: ['Ozempic®', 'Wegovy®', 'Rybelsus®'],
      manufacturer: 'Novo Nordisk',
      mechanism: 'Agonista GLP-1',
      weightLoss: '10-17%',
      price: 'R$ 825 - R$ 1.699',
      approval: 'Aprovado para diabetes e obesidade',
      administration: 'Semanal (injetável) / Diário (oral)',
      doses: ['0,25mg', '0,5mg', '1,0mg', '1,7mg', '2,4mg'],
      status: 'Disponível no Brasil',
      marketShare: '65%'
    },
    tirzepatida: {
      name: 'Tirzepatida',
      brands: ['Mounjaro®', 'Zepbound®'],
      manufacturer: 'Eli Lilly',
      mechanism: 'Agonista duplo GLP-1/GIP',
      weightLoss: '15-25%',
      price: 'R$ 1.135 - R$ 4.077',
      approval: 'Aprovado para diabetes (obesidade off-label)',
      administration: 'Semanal (injetável)',
      doses: ['2,5mg', '5,0mg', '7,5mg', '10mg', '12,5mg', '15mg'],
      status: 'Lançado em maio 2025',
      marketShare: '25%'
    }
  };

  const competitorData = [
    { name: 'Liraglutida', brand: 'Saxenda/Victoza', manufacturer: 'Novo Nordisk', weightLoss: '8%', price: 'R$ 730-1.100', mechanism: 'GLP-1' },
    { name: 'Dulaglutida', brand: 'Trulicity', manufacturer: 'Eli Lilly', weightLoss: '3-5%', price: 'R$ 400-600', mechanism: 'GLP-1' },
    { name: 'Liraglutida', brand: 'Olire/Lirux', manufacturer: 'EMS', weightLoss: '8%', price: 'R$ 760', mechanism: 'GLP-1' }
  ];

  const clinicalStudies = [
    {
      name: 'SURPASS-2',
      drug: 'Tirzepatida vs Semaglutida',
      duration: '40 semanas',
      patients: '1.878',
      hba1c: 'Tirzepatida superior (-2,3% vs -1,9%)',
      weightLoss: 'Tirzepatida: 11,2% vs Semaglutida: 5,7%'
    },
    {
      name: 'SURMOUNT-1',
      drug: 'Tirzepatida',
      duration: '72 semanas',
      patients: '2.539',
      hba1c: '-2,07%',
      weightLoss: '21,9% (dose 15mg)'
    },
    {
      name: 'STEP-1',
      drug: 'Semaglutida',
      duration: '68 semanas',
      patients: '1.961',
      hba1c: '-1,5%',
      weightLoss: '14,9% (dose 2,4mg)'
    },
    {
      name: 'SURMOUNT-5',
      drug: 'Tirzepatida vs Semaglutida',
      duration: '72 semanas',
      patients: '700',
      hba1c: 'Comparável',
      weightLoss: 'Tirzepatida: 20,2% vs Semaglutida: 13,7%'
    }
  ];

  const marketInsights = [
    {
      title: 'Fiocruz-EMS Partnership',
      content: 'Acordo firmado para produção nacional de semaglutida e liraglutida, reduzindo dependência de importação',
      impact: 'Alto',
      date: 'Agosto 2025'
    },
    {
      title: 'Controle ANVISA',
      content: 'Retenção obrigatória de receitas para agonistas GLP-1 desde junho 2025',
      impact: 'Médio',
      date: 'Junho 2025'
    },
    {
      title: 'Redução de Preços',
      content: 'Novo Nordisk reduziu preços em 20% após chegada do Mounjaro',
      impact: 'Alto',
      date: 'Junho 2025'
    },
    {
      title: 'Quebra de Patente',
      content: 'Patente da semaglutida expira em 2026, permitindo genéricos',
      impact: 'Muito Alto',
      date: '2026'
    }
  ];

  const adverseEffects = {
    common: [
      { effect: 'Náusea', semaglutida: '44%', tirzepatida: '18%' },
      { effect: 'Vômitos', semaglutida: '24%', tirzepatida: '18%' },
      { effect: 'Diarreia', semaglutida: '20%', tirzepatida: '16%' },
      { effect: 'Constipação', semaglutida: '16%', tirzepatida: '12%' },
      { effect: 'Dor abdominal', semaglutida: '12%', tirzepatida: '10%' }
    ],
    serious: [
      'Pancreatite aguda',
      'Problemas da vesícula biliar',
      'Reações de hipersensibilidade',
      'Retinopatia diabética',
      'Hipoglicemia (com sulfonilureias/insulina)'
    ],
    contraindications: [
      'Diabetes tipo 1',
      'Cetoacidose diabética',
      'História pessoal/familiar de carcinoma medular da tireoide',
      'Síndrome de neoplasia endócrina múltipla tipo 2',
      'Gravidez e amamentação',
      'Gastroparesia severa'
    ]
  };

  const DashboardSection = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Market Share</p>
              <p className="text-2xl font-bold">90%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Pacientes Tratados</p>
              <p className="text-2xl font-bold">2.5M+</p>
            </div>
            <Users className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-purple-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Receita Mensal</p>
              <p className="text-2xl font-bold">R$ 1.2B</p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-orange-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Eficácia Média</p>
              <p className="text-2xl font-bold">18%</p>
            </div>
            <Activity className="h-8 w-8 text-orange-200" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
            Comparação de Eficácia
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Tirzepatida 15mg</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Semaglutida 2.4mg</span>
                <span>17%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Liraglutida 3mg</span>
                <span>8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '32%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <PieChart className="h-5 w-5 mr-2 text-green-600" />
            Market Share por Fabricante
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                <span>Novo Nordisk</span>
              </div>
              <span className="font-semibold">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                <span>Eli Lilly</span>
              </div>
              <span className="font-semibold">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded mr-3"></div>
                <span>EMS</span>
              </div>
              <span className="font-semibold">8%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded mr-3"></div>
                <span>Outros</span>
              </div>
              <span className="font-semibold">2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Produtos e Tratamentos</h2>
        <select 
          value={selectedDrug} 
          onChange={(e) => setSelectedDrug(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="both">Ambos</option>
          <option value="semaglutida">Semaglutida</option>
          <option value="tirzepatida">Tirzepatida</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {(selectedDrug === 'both' || selectedDrug === 'semaglutida') && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-blue-600">Semaglutida</h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Líder de Mercado</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Mecanismo de Ação</h4>
                <p className="text-gray-600">Agonista seletivo do receptor GLP-1. Aumenta secreção de insulina dependente de glicose, reduz glucagon e retarda esvaziamento gástrico.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Posologia e Administração</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Injetável: 1x/semana (0,25mg → 2,4mg)</li>
                  <li>Oral (Rybelsus): 1x/dia (3mg → 14mg)</li>
                  <li>Aplicação subcutânea: abdome, coxa ou braço</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Indicações Aprovadas</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Diabetes mellitus tipo 2</li>
                  <li>Obesidade (IMC ≥30) ou sobrepeso (IMC ≥27) com comorbidades</li>
                  <li>Redução de risco cardiovascular</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Resultados Clínicos</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Redução HbA1c: até 1,9%</li>
                  <li>Perda de peso: 10-17% do peso corporal</li>
                  <li>Redução risco CV: 26% (SUSTAIN-6)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {(selectedDrug === 'both' || selectedDrug === 'tirzepatida') && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-green-600">Tirzepatida</h3>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">Mais Potente</span>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Mecanismo de Ação</h4>
                <p className="text-gray-600">Agonista duplo dos receptores GLP-1 e GIP. Ação sinérgica potencializa controle glicêmico e perda de peso.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Posologia e Administração</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Injetável: 1x/semana (2,5mg → 15mg)</li>
                  <li>Escalação: 2,5mg por 4 semanas, depois 5mg</li>
                  <li>Aumentos de 2,5mg a cada 4+ semanas conforme tolerância</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Indicações Aprovadas</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Diabetes mellitus tipo 2 (Brasil)</li>
                  <li>Obesidade (EUA, Europa - off-label no Brasil)</li>
                  <li>Apneia do sono + obesidade (EUA)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Resultados Clínicos</h4>
                <ul className="text-gray-600 list-disc list-inside">
                  <li>Redução HbA1c: até 2,3%</li>
                  <li>Perda de peso: 15-25% do peso corporal</li>
                  <li>Superior à semaglutida em ambos os desfechos</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Protocolos Médicos Atuais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 mb-2">Diabetes Tipo 2</h4>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>Metformina como primeira linha</li>
              <li>Agonistas GLP-1 se HbA1c >7% ou necessidade perda peso</li>
              <li>Tirzepatida preferível se HbA1c >8% ou obesidade significativa</li>
              <li>Combinação com insulina em casos complexos</li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 mb-2">Obesidade</h4>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>Modificação estilo vida por 3-6 meses</li>
              <li>Agonistas GLP-1 se IMC ≥30 ou ≥27 com comorbidades</li>
              <li>Tirzepatida para casos refratários ou perda >20%</li>
              <li>Cirurgia bariátrica se farmacoterapia insuficiente</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );

  const ClinicalSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contexto Clínico</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Estudos Clínicos Pivotais</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Estudo</th>
                <th className="border p-3 text-left">Medicamento</th>
                <th className="border p-3 text-left">Duração</th>
                <th className="border p-3 text-left">Pacientes</th>
                <th className="border p-3 text-left">HbA1c</th>
                <th className="border p-3 text-left">Perda de Peso</th>
              </tr>
            </thead>
            <tbody>
              {clinicalStudies.map((study, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3 font-medium">{study.name}</td>
                  <td className="border p-3">{study.drug}</td>
                  <td className="border p-3">{study.duration}</td>
                  <td className="border p-3">{study.patients}</td>
                  <td className="border p-3">{study.hba1c}</td>
                  <td className="border p-3">{study.weightLoss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Tendências de Tratamento</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Mudança de Paradigma</h4>
              <p className="text-gray-600">Transição do foco exclusivo no controle glicêmico para abordagem integrada diabetes-obesidade.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Personalização</h4>
              <p className="text-gray-600">Escolha baseada em perfil do paciente: tirzepatida para maior perda de peso, semaglutida para controle CV.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Combinações</h4>
              <p className="text-gray-600">Uso crescente com inibidores SGLT2 para potencializar efeitos metabólicos e cardiovasculares.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Particularidades Regionais</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Brasil</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Alta prevalência de diabetes (7,7% população)</li>
                <li>Obesidade crescente (22,8% adultos)</li>
                <li>SUS: apenas metformina e insulina disponíveis</li>
                <li>Setor privado: acesso limitado por custo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Perfil do Paciente-Alvo</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Diabetes tipo 2 inadequadamente controlado</li>
                <li>Obesidade com comorbidades</li>
                <li>Falha em modificações do estilo de vida</li>
                <li>Necessidade de perda de peso significativa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Efeitos Adversos e Contraindicações</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-red-600 mb-3">Efeitos Mais Comuns</h4>
            <div className="space-y-2">
              {adverseEffects.common.map((effect, index) => (
                <div key={index} className="border-l-4 border-red-200 pl-3">
                  <div className="font-medium text-gray-700">{effect.effect}</div>
                  <div className="text-sm text-gray-600">
                    Semaglutida: {effect.semaglutida} | Tirzepatida: {effect.tirzepatida}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-orange-600 mb-3">Efeitos Graves</h4>
            <ul className="space-y-2">
              {adverseEffects.serious.map((effect, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{effect}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-600 mb-3">Contraindicações</h4>
            <ul className="space-y-2">
              {adverseEffects.contraindications.map((contra, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{contra}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const KnowledgeSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Conhecimentos Complementares</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-green-600" />
            Marketing Farmacêutico
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Estratégias de Posicionamento</h4>
              <div className="bg-blue-50 p-3 rounded mt-2">
                <p className="text-sm text-blue-800"><strong>Semaglutida:</strong> "Líder comprovado com perfil cardiovascular estabelecido"</p>
              </div>
              <div className="bg-green-50 p-3 rounded mt-2">
                <p className="text-sm text-green-800"><strong>Tirzepatida:</strong> "Nova geração - máxima eficácia em perda de peso"</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Programas de Acesso</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Novo Nordisk: Programa NovoCare (até 40% desconto)</li>
                <li>Eli Lilly: Programa de Fidelidade Mounjaro</li>
                <li>Samples gratuitas para início de tratamento</li>
                <li>Parcerias com seguros privados</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-600" />
            Técnicas de Vendas Consultivas
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Identificação do Perfil</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-gray-50 p-2 rounded text-sm">
                  <strong>Diabetes:</strong> HbA1c >7%, comorbidades
                </div>
                <div className="bg-gray-50 p-2 rounded text-sm">
                  <strong>Obesidade:</strong> IMC >30, tentativas prévias
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Argumentos Diferenciadores</h4>
              <ul className="text-gray-600 list-disc list-inside text-sm">
                <li>Evidências head-to-head (SURPASS vs SUSTAIN)</li>
                <li>Experiência do paciente (frequência, tolerabilidade)</li>
                <li>Resultados tangíveis (% perda peso, HbA1c)</li>
                <li>Custo-efetividade a longo prazo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Insights de Mercado Recentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketInsights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-700">{insight.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  insight.impact === 'Muito Alto' ? 'bg-red-100 text-red-800' :
                  insight.impact === 'Alto' ? 'bg-orange-100 text-orange-800' :
                  insight.impact === 'Médio' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {insight.impact}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{insight.content}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="h-3 w-3 mr-1" />
                {insight.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Gestão de Relacionamento</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-700">Endocrinologistas</h4>
              <p className="text-gray-600 text-sm">Foco em dados de eficácia, estudos comparativos e guidelines internacionais</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-700">Clínicos Gerais</h4>
              <p className="text-gray-600 text-sm">Ênfase em facilidade de uso, perfil de segurança e algoritmos de tratamento</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-700">Cardiologistas</h4>
              <p className="text-gray-600 text-sm">Destaque para benefícios cardiovasculares e redução de fatores de risco</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Modelos de Negócio Médico</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-700">Setor Público</h4>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Protocolos PCDT (Protocolos Clínicos)</li>
                <li>Judicialização crescente</li>
                <li>Parcerias público-privadas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Setor Privado</h4>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Value-based care</li>
                <li>Outcomes research</li>
                <li>Medicina de precisão</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CompetitiveSection = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Análise Competitiva</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Comparação Direta - Principais Concorrentes</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-3 text-left">Medicamento</th>
                <th className="border p-3 text-left">Marca</th>
                <th className="border p-3 text-left">Fabricante</th>
                <th className="border p-3 text-left">Mecanismo</th>
                <th className="border p-3 text-left">Perda de Peso</th>
                <th className="border p-3 text-left">Preço (R$)</th>
                <th className="border p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50">
                <td className="border p-3 font-medium">Semaglutida</td>
                <td className="border p-3">Ozempic/Wegovy</td>
                <td className="border p-3">Novo Nordisk</td>
                <td className="border p-3">GLP-1</td>
                <td className="border p-3 font-bold text-blue-600">10-17%</td>
                <td className="border p-3">825 - 1.699</td>
                <td className="border p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Líder</span></td>
              </tr>
              <tr className="bg-green-50">
                <td className="border p-3 font-medium">Tirzepatida</td>
                <td className="border p-3">Mounjaro</td>
                <td className="border p-3">Eli Lilly</td>
                <td className="border p-3">GLP-1/GIP</td>
                <td className="border p-3 font-bold text-green-600">15-25%</td>
                <td className="border p-3">1.135 - 4.077</td>
                <td className="border p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Disruptor</span></td>
              </tr>
              {competitorData.map((competitor, index) => (
                <tr key={index}>
                  <td className="border p-3">{competitor.name}</td>
                  <td className="border p-3">{competitor.brand}</td>
                  <td className="border p-3">{competitor.manufacturer}</td>
                  <td className="border p-3">{competitor.mechanism}</td>
                  <td className="border p-3">{competitor.weightLoss}</td>
                  <td className="border p-3">{competitor.price}</td>
                  <td className="border p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">Concorrente</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Diferenciais Competitivos</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50">
              <h4 className="font-semibold text-blue-700 mb-2">Semaglutida - Vantagens</h4>
              <ul className="text-blue-600 list-disc list-inside text-sm">
                <li>Primeira no mercado - experiência clínica estabelecida</li>
                <li>Dados cardiovasculares robustos (SUSTAIN-6, PIONEER-6)</li>
                <li>Múltiplas apresentações (injetável + oral)</li>
                <li>Programa de acesso consolidado</li>
                <li>Menor custo por tratamento</li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 bg-green-50">
              <h4 className="font-semibold text-green-700 mb-2">Tirzepatida - Vantagens</h4>
              <ul className="text-green-600 list-disc list-inside text-sm">
                <li>Superior em perda de peso (estudos head-to-head)</li>
                <li>Mecanismo dual inovador (GLP-1 + GIP)</li>
                <li>Menor incidência de náusea vs semaglutida</li>
                <li>Resultados mais rápidos e sustentados</li>
                <li>Potencial para novas indicações (NASH, apneia)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Estratégias da Concorrência</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Novo Nordisk</h4>
              <ul className="text-gray-600 list-disc list-inside text-sm">
                <li>Redução de preços em 20% (resposta ao Mounjaro)</li>
                <li>Investimento em educação médica continuada</li>
                <li>Expansão do programa NovoCare</li>
                <li>Parceria com influenciadores e celebridades</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Eli Lilly</h4>
              <ul className="text-gray-600 list-disc list-inside text-sm">
                <li>Posicionamento premium baseado em eficácia</li>
                <li>Investimento pesado em estudos comparativos</li>
                <li>Parcerias estratégicas com KOLs</li>
                <li>Pipeline robusto (retatrutida - triplo agonista)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Pontos Fracos a Serem Explorados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-red-600">Concorrentes Diretos</h4>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              <li>Liraglutida: eficácia inferior, aplicação diária</li>
              <li>Dulaglutida: menor perda de peso</li>
              <li>EMS Olire: marca nova, eficácia limitada</li>
            </ul>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-orange-600">Barreiras de Entrada</h4>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              <li>Alto custo de desenvolvimento</li>
              <li>Patentes até 2035 (tirzepatida)</li>
              <li>Complexidade regulatória</li>
              <li>Necessidade de estudos longos</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-600">Oportunidades</h4>
            <ul className="text-gray-600 text-sm list-disc list-inside">
              <li>Mercado sub-atendido no SUS</li>
              <li>Crescimento da obesidade</li>
              <li>Medicina preventiva</li>
              <li>Telemedicina e DTC</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Objeções Comparativas e Respostas</h3>
        <div className="space-y-4">
          {[
            {
              objection: "Tirzepatida é muito cara comparada à semaglutida",
              response: "O custo deve ser avaliado por resultado obtido. Tirzepatida proporciona até 47% mais perda de peso, podendo reduzir tempo de tratamento e comorbidades associadas."
            },
            {
              objection: "Semaglutida tem mais dados de segurança cardiovascular",
              response: "Verdadeiro, mas tirzepatida demonstra perfil metabólico superior com melhor controle de triglicerídeos, pressão arterial e peso - fatores de risco CV importantes."
            },
            {
              objection: "Liraglutida nacional (EMS) oferece custo-benefício melhor",
              response: "Liraglutida requer aplicação diária vs semanal, com eficácia limitada (8% vs 17-25%). Compliance e resultados favorecem agonistas GLP-1 de nova geração."
            }
          ].map((item, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700 mb-2">Objeção: {item.objection}</h4>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-600 text-sm"><strong>Resposta:</strong> {item.response}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3, component: DashboardSection },
    { id: 'products', name: 'Produtos & Tratamentos', icon: FileText, component: ProductsSection },
    { id: 'clinical', name: 'Contexto Clínico', icon: Activity, component: ClinicalSection },
    { id: 'knowledge', name: 'Conhecimentos Complementares', icon: Target, component: KnowledgeSection },
    { id: 'competitive', name: 'Análise Competitiva', icon: TrendingUp, component: CompetitiveSection }
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || DashboardSection;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Conhecimento Apurado</h1>
                <p className="text-sm text-gray-600">Sistema de Intelligence - Semaglutida & Tirzepatida</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar informações..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="text-sm text-gray-600">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    <span className="font-medium">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default KnowledgeSystem;