'use client';

import { createStaff } from '@/helpers/api';
import { useState } from 'react';

const team = [
  {
    id: 1,
    name: 'Brady',
    image: '/headshots/brady.png',
    role: 'SR. ACCOUNTANT',
  },
  {
    id: 2,
    name: 'Emma',
    image: '/headshots/emma.png',
    role: 'TITLE',
  },
  {
    id: 3,
    name: 'Ginger',
    image: '/headshots/ginger.png',
    role: 'PROJECT MANAGER & PRODUCTION DIRECTOR',
    extra: 'NCARB',
  },
  {
    id: 4,
    name: 'Howard',
    image: '/headshots/howard.png',
    role: 'PROJECT ARCHITECT',
  },
  {
    id: 5,
    name: 'Husna',
    image: '/headshots/husna.png',
    role: 'PROJECT STAFF ARCHITECT',
  },
  {
    id: 6,
    name: 'Jared',
    image: '/headshots/jared.png',
    role: 'TITLE',
  },
  {
    id: 7,
    name: 'Jenny',
    image: '/headshots/jenny.png',
    role: 'TITLE',
  },
  {
    id: 8,
    name: 'Jose',
    image: '/headshots/jose.png',
    role: 'Title',
  },
  {
    id: 9,
    name: 'Josh',
    image: '/headshots/josh.png',
    role: 'MILLWORK MANAGER',
  },
  {
    id: 10,
    name: 'Lauren',
    image: '/headshots/lauren.png',
    role: 'TITLE',
  },
  {
    id: 11,
    name: 'Lina',
    image: '/headshots/lina.png',
    role: 'TITLE',
  },
  {
    id: 12,
    name: 'Lindsay',
    image: '/headshots/lindsay.png',
    role: 'DESIGN DIRECTOR',
  },
  {
    id: 13,
    name: 'Marie',
    image: '/headshots/marie.png',
    role: 'Procurement Manager',
  },
  {
    id: 14,
    name: 'Marlene',
    image: '/headshots/marlene.png',
    role: 'TITLE',
  },
  {
    id: 15,
    name: 'Olivia',
    image: '/headshots/olivia.png',
    role: 'Designer',
  },
  {
    id: 16,
    name: 'Paul',
    image: '/headshots/paul.png',
    role: 'PROJECT ARCHITECT',
  },
  {
    id: 17,
    name: 'Pedro',
    image: '/headshots/pedro.png',
    role: 'architectural designer',
  },
  {
    id: 18,
    name: 'Phu',
    image: '/headshots/phu.png',
    role: 'Sr. Architectural Designer & Project Manager',
  },
  {
    id: 19,
    name: 'Rosa',
    image: '/headshots/rosa.png',
    role: 'Title',
  },
  {
    id: 20,
    name: 'Sonya',
    image: '/headshots/sonya.png',
    role: 'sR. DESIGNER',
  },
  {
    id: 21,
    name: 'Stephanie',
    image: '/headshots/steph.png',
    role: 'sR. DESIGNER',
  },
  {
    id: 22,
    name: 'Taylor',
    image: '/headshots/taylor.png',
    role: 'sR. ART DIRECTOR',
  },
  {
    id: 23,
    name: 'Vicky',
    image: '/headshots/vicky.png',
    role: 'Project designer',
  },
];

export default function Tools() {
  const [isLoading, setIsLoading] = useState(false);

  const createAllStaff = async () => {
    setIsLoading(true);
    for (const person of team) {
      await createStaff({
        name: person.name,
        image: person.image,
        title: person.role,
        extra: person.extra || '',
      });
    }
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={createAllStaff}>Create all staff</button>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}
