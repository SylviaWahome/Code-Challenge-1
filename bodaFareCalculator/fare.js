function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const totalFare = baseFare + (distanceInKm * perKmCharge);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceInKm * perKmCharge}
Total: KES ${totalFare}

Panda Pikipiki!`);
}

const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);
