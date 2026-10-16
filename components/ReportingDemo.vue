<script setup>
import { RotateCcw, Filter, Check } from "lucide-vue-next";
const records = [
  {
    id: "DEMO-001",
    date: "2026-10-02",
    area: "Zone A",
    status: "Paid",
    amount: 20,
  },
  {
    id: "DEMO-002",
    date: "2026-10-04",
    area: "Zone B",
    status: "Pending",
    amount: 30,
  },
  {
    id: "DEMO-003",
    date: "2026-10-06",
    area: "Zone A",
    status: "Paid",
    amount: 20,
  },
  {
    id: "DEMO-004",
    date: "2026-10-08",
    area: "Zone C",
    status: "Pending",
    amount: 50,
  },
  {
    id: "DEMO-005",
    date: "2026-10-10",
    area: "Zone B",
    status: "Paid",
    amount: 30,
  },
];
const from = ref("");
const to = ref("");
const status = ref("All");
const result = ref([...records]);
const error = ref("");
const announcement = ref("Showing all 5 fictional records.");
function apply() {
  if (from.value && to.value && from.value > to.value) {
    error.value =
      "The end date must be on or after the start date. Your previous results are still shown.";
    return;
  }
  error.value = "";
  result.value = records.filter(
    (r) =>
      (!from.value || r.date >= from.value) &&
      (!to.value || r.date <= to.value) &&
      (status.value === "All" || r.status === status.value),
  );
  announcement.value =
    result.value.length +
    " fictional " +
    (result.value.length === 1 ? "record" : "records") +
    " found.";
}
function reset() {
  from.value = "";
  to.value = "";
  status.value = "All";
  error.value = "";
  result.value = [...records];
  announcement.value = "Reset. Showing all 5 fictional records.";
}
</script>
<template>
  <div class="reporting-demo">
    <div class="demo-header">
      <span class="small-pill">Illustrative sandbox</span
      ><span class="mini-label">SYNTHETIC DATA ONLY</span>
    </div>
    <form @submit.prevent="apply" novalidate>
      <div class="demo-fields">
        <label
          >From<input
            v-model="from"
            type="date"
            :aria-invalid="!!error"
            :aria-describedby="error ? 'date-error' : undefined" /></label
        ><label
          >To<input
            v-model="to"
            type="date"
            :aria-invalid="!!error"
            :aria-describedby="error ? 'date-error' : undefined" /></label
        ><label
          >Status<select v-model="status">
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
          </select></label
        >
      </div>
      <div class="button-row">
        <button class="button button-primary button-small" type="submit">
          <Filter :size="15" /> Apply filters</button
        ><button class="button button-small" type="button" @click="reset">
          <RotateCcw :size="15" /> Reset
        </button>
      </div>
      <p v-if="error" id="date-error" class="field-error" role="alert">
        {{ error }}
      </p>
    </form>
    <p class="results-status" role="status">{{ announcement }}</p>
    <div v-if="result.length" class="demo-table-wrap">
      <table>
        <caption class="sr-only">
          Fictional parking report records
        </caption>
        <thead>
          <tr>
            <th scope="col">Record</th>
            <th scope="col">Date</th>
            <th scope="col">Area</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in result" :key="record.id">
            <th scope="row">{{ record.id }}</th>
            <td>{{ record.date }}</td>
            <td>{{ record.area }}</td>
            <td>
              <span :class="['record-status', record.status.toLowerCase()]"
                ><Check v-if="record.status === 'Paid'" :size="12" />{{
                  record.status
                }}</span
              >
            </td>
            <td>RM {{ record.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="demo-empty">
      <h4>No records in this view.</h4>
      <p>Try another date range or reset the filters.</p>
      <button class="text-link" type="button" @click="reset">
        Reset filters <RotateCcw :size="15" />
      </button>
    </div>
    <details class="demo-explanation">
      <summary>How this example works</summary>
      <p>
        Five fictional records are filtered locally in your browser. Date
        boundaries are inclusive. Select Paid or Pending to narrow the results,
        then apply the filters. A reversed date range shows an error without
        replacing your previous results. Reset restores all five records. No
        requests are sent to a production service.
      </p>
    </details>
  </div>
</template>
