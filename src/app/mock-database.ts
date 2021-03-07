import { User } from './classes/user';
import { Job } from './classes/job';

export const USERS: User[] = [
  { id: 11, name: 'Andres', verified: true, hasScore: true, score: 5, email: 'an@email.com', phone: '333'  },
  { id: 12, name: 'Berta', verified: true, hasScore: true, score: 3, email: 'an@email.com', phone: '333'  },
  { id: 13, name: 'Cristina', verified: false, hasScore: false, score: 0, email: 'an@email.com', phone: '333'  },
  { id: 14, name: 'Yolanda', verified: true, hasScore: true, score: 5, email: 'an@email.com', phone: '333'  },
  { id: 15, name: 'Walaâ', verified: true, hasScore: false, score: 0, email: 'an@email.com', phone: '333'  },
  { id: 16, name: 'Diana', verified: false, hasScore: false, score: 0, email: 'an@email.com', phone: '333'  },
  { id: 17, name: 'Yasmin', verified: true, hasScore: true, score: 3, email: 'an@email.com', phone: '333'  },
  { id: 18, name: 'Raul', verified: true, hasScore: true, score: 4, email: 'an@email.com', phone: '333'  },
  { id: 19, name: 'Gisela', verified: false, hasScore: false, score: 0, email: 'an@email.com', phone: '333'  },
];

export const JOBS: Job[] = [
    { id: 11, assignedPainter: 11, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 1000, order_range: '0-1000'  },
    { id: 11, assignedPainter: 11, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 1000, order_range: '0-1000'  },
    { id: 11, assignedPainter: 12, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 3000, order_range: '2000-3000'  },
    { id: 11, assignedPainter: 13, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 1000, order_range: '0-1000'  },
    { id: 11, assignedPainter: 14, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 1000, order_range: '0-1000'  },
    { id: 11, assignedPainter: 15, from: 'taruga', entryDate: Date.now(), paintingDate: Date.now(), contactPhone: '323', order_total: 1000, order_range: '0-1000'  },
]