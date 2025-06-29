"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Globe,
  ShoppingCart,
  Lightbulb,
  Building,
  User,
  Users,
} from "lucide-react";

interface FormData {
  projectType: string;
  websiteStatus: string;
  businessStatus: string;
  projectSize: string;
  maintenance: string;
  timeline: string;
  budget: string;
  features: string[];
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Fragebogen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    websiteStatus: "",
    businessStatus: "",
    projectSize: "",
    maintenance: "",
    timeline: "",
    budget: "",
    features: [],
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, feature],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        features: prev.features.filter((f) => f !== feature),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Hier würden Sie die Daten an Ihr Backend senden
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Wählen Sie Ihre Projektart</h2>
              <p className="text-muted-foreground">
                Um Ihnen ein passendes Angebot zu erstellen, benötigen wir
                einige Informationen
              </p>
            </div>
            <RadioGroup
              value={formData.projectType}
              onValueChange={(value: string) =>
                setFormData((prev) => ({ ...prev, projectType: value }))
              }
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="website" id="website" />
                <Globe className="h-5 w-5 text-blue-600" />
                <div>
                  <Label
                    htmlFor="website"
                    className="font-medium cursor-pointer"
                  >
                    Website / Unternehmensseite
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Präsentationswebsite, Portfolio, Firmenauftritt
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="shop" id="shop" />
                <ShoppingCart className="h-5 w-5 text-green-600" />
                <div>
                  <Label htmlFor="shop" className="font-medium cursor-pointer">
                    Online Shop / E-Commerce
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Verkaufsplattform, Produktkatalog, Zahlungsabwicklung
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="other" id="other" />
                <Lightbulb className="h-5 w-5 text-purple-600" />
                <div>
                  <Label htmlFor="other" className="font-medium cursor-pointer">
                    Web-Anwendung / Sonstiges
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Kundenportal, Buchungssystem, individuelle Lösung
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Ihr aktueller Status</h2>
              <p className="text-muted-foreground">
                Haben Sie bereits eine Website oder starten Sie komplett neu?
              </p>
            </div>
            <RadioGroup
              value={formData.websiteStatus}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, websiteStatus: value }))
              }
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="new" id="new" />
                <div>
                  <Label htmlFor="new" className="font-medium cursor-pointer">
                    Ich starte komplett neu
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Noch keine Website vorhanden
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="existing" id="existing" />
                <div>
                  <Label
                    htmlFor="existing"
                    className="font-medium cursor-pointer"
                  >
                    Website ist bereits vorhanden
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Überarbeitung oder Neuentwicklung einer bestehenden Site
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="domain" id="domain" />
                <div>
                  <Label
                    htmlFor="domain"
                    className="font-medium cursor-pointer"
                  >
                    Nur Domain vorhanden
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Domain registriert, aber noch keine Website erstellt
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Ihr Unternehmenstyp</h2>
              <p className="text-muted-foreground">
                Welcher Status trifft auf Sie zu?
              </p>
            </div>
            <RadioGroup
              value={formData.businessStatus}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, businessStatus: value }))
              }
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="company" id="company" />
                <Building className="h-5 w-5 text-blue-600" />
                <div>
                  <Label
                    htmlFor="company"
                    className="font-medium cursor-pointer"
                  >
                    Etabliertes Unternehmen
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    GmbH, AG, eingetragene Firma
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="freelancer" id="freelancer" />
                <User className="h-5 w-5 text-green-600" />
                <div>
                  <Label
                    htmlFor="freelancer"
                    className="font-medium cursor-pointer"
                  >
                    Selbstständig / Freiberufler
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Einzelunternehmer, Freiberufler
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="sidebusiness" id="sidebusiness" />
                <div>
                  <Label
                    htmlFor="sidebusiness"
                    className="font-medium cursor-pointer"
                  >
                    Nebengewerbe / Startup
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Nebentätigkeit, junges Unternehmen
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="private" id="private" />
                <Users className="h-5 w-5 text-purple-600" />
                <div>
                  <Label
                    htmlFor="private"
                    className="font-medium cursor-pointer"
                  >
                    Privat / Verein / Non-Profit
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Privatperson, Verein, gemeinnützige Organisation
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Projektumfang</h2>
              <p className="text-muted-foreground">
                Wie umfangreich soll Ihr Projekt werden?
              </p>
            </div>
            <RadioGroup
              value={formData.projectSize}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, projectSize: value }))
              }
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="small" id="small" />
                <div>
                  <Label htmlFor="small" className="font-medium cursor-pointer">
                    Kompakt (1-5 Seiten)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Landing Page, einfache Firmenwebsite, Portfolio
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="medium" id="medium" />
                <div>
                  <Label
                    htmlFor="medium"
                    className="font-medium cursor-pointer"
                  >
                    Standard (6-15 Seiten)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Umfangreiche Unternehmensseite, kleiner Shop
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="large" id="large" />
                <div>
                  <Label htmlFor="large" className="font-medium cursor-pointer">
                    Umfangreich (15+ Seiten)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Großer Online-Shop, komplexe Web-Anwendung
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Gewünschte Features</h2>
              <p className="text-muted-foreground">
                Welche Funktionen sind für Sie wichtig? (Mehrfachauswahl
                möglich)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Responsive Design (Mobile-optimiert)",
                "Suchmaschinenoptimierung (SEO)",
                "Content Management System (CMS)",
                "Kontaktformular",
                "Newsletter-Anmeldung",
                "Social Media Integration",
                "Online-Terminbuchung",
                "Mehrsprachigkeit",
                "Blog/News-Bereich",
                "Galerie/Portfolio",
                "Online-Shop Funktionen",
                "Mitgliederbereich/Login",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 p-3 border rounded-lg"
                >
                  <Checkbox
                    id={feature}
                    checked={formData.features.includes(feature)}
                    onCheckedChange={(checked) =>
                      handleFeatureChange(feature, checked as boolean)
                    }
                  />
                  <Label htmlFor={feature} className="text-sm cursor-pointer">
                    {feature}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Timeline & Budget</h2>
              <p className="text-muted-foreground">
                Wann soll das Projekt fertig sein und welches Budget haben Sie
                eingeplant?
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">
                  Gewünschte Timeline
                </Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, timeline: value }))
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap" className="cursor-pointer">
                      So schnell wie möglich
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1month" id="1month" />
                    <Label htmlFor="1month" className="cursor-pointer">
                      Innerhalb 1 Monat
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3months" id="3months" />
                    <Label htmlFor="3months" className="cursor-pointer">
                      Innerhalb 3 Monate
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible" className="cursor-pointer">
                      Zeitlich flexibel
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">
                  Budget-Rahmen
                </Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, budget: value }))
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under1000" id="under1000" />
                    <Label htmlFor="under1000" className="cursor-pointer">
                      Unter 1.000 €
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000-3000" id="1000-3000" />
                    <Label htmlFor="1000-3000" className="cursor-pointer">
                      1.000 - 3.000 €
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3000-5000" id="3000-5000" />
                    <Label htmlFor="3000-5000" className="cursor-pointer">
                      3.000 - 5.000 €
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5000-10000" id="5000-10000" />
                    <Label htmlFor="5000-10000" className="cursor-pointer">
                      5.000 - 10.000 €
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over10000" id="over10000" />
                    <Label htmlFor="over10000" className="cursor-pointer">
                      Über 10.000 €
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">
                  Laufende Betreuung gewünscht?
                </Label>
                <RadioGroup
                  value={formData.maintenance}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, maintenance: value }))
                  }
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="maintenance-yes" />
                    <Label htmlFor="maintenance-yes" className="cursor-pointer">
                      Ja, Wartung und Updates wären hilfreich
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="maintenance-no" />
                    <Label htmlFor="maintenance-no" className="cursor-pointer">
                      Nein, einmalige Erstellung reicht
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="maintenance-maybe" />
                    <Label
                      htmlFor="maintenance-maybe"
                      className="cursor-pointer"
                    >
                      Eventuell, je nach Angebot
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Ihre Kontaktdaten</h2>
              <p className="text-muted-foreground">
                Damit wir Ihnen ein individuelles Angebot erstellen können
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Zusätzliche Informationen</Label>
                <Textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Projekt genauer, besondere Wünsche, Referenzen..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <CheckCircle className="mr-2 h-4 w-4" />
                Kostenlose Beratung anfragen
              </Button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-xl">
      <CardHeader className="text-center">
        <div className="mb-4">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            Schritt {currentStep} von {totalSteps}
          </p>
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Projekt-Anfrage
        </CardTitle>
        <CardDescription>
          Lassen Sie uns gemeinsam Ihr perfektes Web-Projekt planen
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderStep()}

        {currentStep < 7 && (
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>
            <div className="flex gap-2">
              {currentStep > 2 && (
                <Button variant="ghost" onClick={handleSkip}>
                  Überspringen
                </Button>
              )}
              <Button
                onClick={handleNext}
                // disabled={
                //   (currentStep === 1 && !formData.projectType) ||
                //   (currentStep === 2 && !formData.websiteStatus) ||
                //   (currentStep === 3 && !formData.businessStatus)
                // }
              >
                Weiter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
