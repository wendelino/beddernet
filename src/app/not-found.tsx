"use client";

import WidthWrapper from "@/components/shared/width-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home, Mail } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <WidthWrapper className="  flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        {/* Large 404 Number */}
        <div className="relative">
          <h1 className="text-[12rem] md:text-[16rem] font-bold text-muted-foreground/20 leading-none select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Seite nicht gefunden :/
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Entschuldigung, die Seite die Sie suchen existiert nicht oder wurde
            verschoben.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="min-w-[160px] bg-company-foreground">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px]"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        </div>

        {/* Help Card */}
        <Card className="max-w-md mx-auto mt-12">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <Mail className="h-8 w-8 mx-auto text-muted-foreground" />
              <div>
                <h3 className="font-semibold">Brauchen Sie Hilfe?</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kontaktieren Sie uns, wenn Sie Unterstützung benötigen.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </WidthWrapper>
  );
}
