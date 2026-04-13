import { componentRegistry, type ComponentStatus } from './componentRegistry'

const statusConfig: Record<ComponentStatus, { color: string; bg: string; border: string }> = {
  stable: { color: '#15803d', bg: '#f0fdf4', border: '#bbf7d0' },
  beta: { color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
  experimental: { color: '#4338ca', bg: '#eef2ff', border: '#c7d2fe' },
  deprecated: { color: '#b91c1c', bg: '#fff1f0', border: '#ffc5bf' },
}

function StatusBadge({ status }: { status: ComponentStatus }) {
  const cfg = statusConfig[status]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.02em',
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
      }}
    >
      {status}
    </span>
  )
}

function A11yBadge({ value }: { value: string }) {
  if (value === 'N/A') {
    return (
      <span style={{ fontSize: '12px', color: '#a8a7a2' }}>N/A</span>
    )
  }
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 500,
        color: '#15803d',
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        fontFamily: 'var(--typography-font-family-mono, monospace)',
      }}
    >
      {value}
    </span>
  )
}

export function ComponentStatusTable() {
  const categories = [...new Set(componentRegistry.map((c) => c.category))]

  return (
    <div style={{ fontFamily: 'var(--typography-font-family-sans, sans-serif)' }}>
      {categories.map((category) => {
        const components = componentRegistry.filter((c) => c.category === category)
        return (
          <div key={category} style={{ marginBottom: '32px' }}>
            <h3
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#7a7974',
                margin: '0 0 8px 0',
              }}
            >
              {category}
            </h3>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
                border: '1px solid #e3e2df',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <thead>
                <tr style={{ background: '#fafaf9' }}>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '10px 16px',
                      fontWeight: 600,
                      color: '#5c5b57',
                      borderBottom: '1px solid #e3e2df',
                      width: '40%',
                    }}
                  >
                    Component
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '10px 16px',
                      fontWeight: 600,
                      color: '#5c5b57',
                      borderBottom: '1px solid #e3e2df',
                      width: '30%',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '10px 16px',
                      fontWeight: 600,
                      color: '#5c5b57',
                      borderBottom: '1px solid #e3e2df',
                      width: '30%',
                    }}
                  >
                    Accessibility
                  </th>
                </tr>
              </thead>
              <tbody>
                {components.map((component, i) => (
                  <tr
                    key={component.name}
                    style={{
                      borderBottom: i < components.length - 1 ? '1px solid #f5f4f2' : 'none',
                    }}
                  >
                    <td style={{ padding: '10px 16px', fontWeight: 500 }}>
                      {component.name}
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <StatusBadge status={component.status} />
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <A11yBadge value={component.a11y} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      })}

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          background: '#fafaf9',
          border: '1px solid #e3e2df',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#7a7974',
        }}
      >
        <strong style={{ color: '#3e3d3a' }}>Status key: </strong>
        {(['stable', 'beta', 'experimental', 'deprecated'] as ComponentStatus[]).map((s) => (
          <span key={s} style={{ marginLeft: '12px' }}>
            <StatusBadge status={s} />
          </span>
        ))}
      </div>
    </div>
  )
}
