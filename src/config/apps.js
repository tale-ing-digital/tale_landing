import {
  Briefcase,
  Lock,
  Activity,
  Download,
  Calendar,
} from 'lucide-react';

export const APPS = [
  {
    id: 'talehub',
    name: 'TaleHub',
    description:
      'Centro seguro de herramientas internas y gestión de información sensible. Panel operativo centralizado.',
    category: 'Estratégico',
    icon: Briefcase,
    env: 'PROD',
    status: 'online',
    url: 'http://192.168.1.10:3000/',
  },
  {
    id: 'talebank',
    name: 'TaleBank Admin',
    description:
      'Administración bancaria segura con control de credenciales y trazabilidad completa de uso.',
    category: 'Seguridad',
    icon: Lock,
    env: 'PROD',
    status: 'online',
    url: 'http://192.168.1.10:3002/login',
  },
  {
    id: 'taleinsight',
    name: 'Tale Insight Analytics',
    description:
      'Informes en tiempo real e insights accionables por área, operación y período.',
    category: 'Analytics',
    icon: Activity,
    env: 'PROD',
    status: 'online',
    url: 'http://192.168.1.10:3003/',
  },
  {
    id: 'taledownload',
    name: 'TaleDownload',
    description:
      'Descarga consolidada de documentos críticos por proyecto, unidad y tipo documental.',
    category: 'Operación',
    icon: Download,
    env: 'STG',
    status: 'maintenance',
    url: 'http://192.168.1.10:8010/',
  },
  {
    id: 'talesingroom',
    name: 'Tale Singroom',
    description:
      'Reserva inteligente de salas con visibilidad de uso y ocupación en tiempo real.',
    category: 'Utilidad',
    icon: Calendar,
    env: 'PROD',
    status: 'online',
    url: null, // Próximamente en producción
  },
];
