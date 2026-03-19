import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { ClinicLocation } from "@/types";

interface ClinicLocationSectionProps {
  locations: ClinicLocation[];
}

export function ClinicLocationSection({ locations }: ClinicLocationSectionProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="mb-12">
          <SectionHeading
            label="Locations"
            title="Visit our clinics"
            description="Consult with our team at premium, patient-centered clinic spaces designed for comfort and privacy."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <Card key={location.id}>
              <h3 className="font-serif text-2xl text-primary">{location.name}</h3>
              <p className="mt-3 leading-8 text-text-secondary/95">
                {location.address}, {location.city}
              </p>
              <p className="mt-4 text-sm text-primary">{location.phone}</p>
              <p className="text-sm text-text-secondary">{location.hours}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
