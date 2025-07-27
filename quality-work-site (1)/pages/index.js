import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="p-4 space-y-6">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Quality Work</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empresa especializada em serviços técnicos e operacionais, legalmente habilitada para atuar nos setores de reparação automotiva, subcontratação industrial e serviços de limpeza. 
          Atuamos como subcontratados em conformidade com os ramos autorizados em nossos estatutos, com parcerias internacionais para fornecimento de mão de obra qualificada.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Reparação Automotiva</h2>
            <p>
              Martelinho de ouro, funilaria, pintura, preparação e montagem de peças, com equipe experiente e equipamentos próprios. Atendimento móvel e fixo.
            </p>
            <Button>Saiba mais</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Subcontratação Industrial</h2>
            <p>
              Prestação de serviços diversos para fábricas e centros de produção: montagem, embalagem, apoio à linha de produção e outras funções operacionais sob demanda.
            </p>
            <Button>Ver detalhes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Limpezas Profissionais</h2>
            <p>
              Serviços de limpeza residencial e empresarial: manutenção, pós-obra, vitrines, escritórios e áreas comuns. Equipe treinada e materiais de qualidade.
            </p>
            <Button>Solicitar orçamento</Button>
          </CardContent>
        </Card>
      </section>

      <section className="text-center py-8">
        <h3 className="text-2xl font-bold">Parceiros internacionais</h3>
        <p className="max-w-2xl mx-auto">
          Contamos com parcerias estratégicas fora da França para fornecimento de mão de obra qualificada, sempre respeitando a legislação francesa e garantindo alto nível de desempenho técnico.
        </p>
      </section>
    </main>
  );
}
