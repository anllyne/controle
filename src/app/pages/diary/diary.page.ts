import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface DiaryEntry {
  date: string;
  summary: string;
  content: string;
}

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage {
  diaryEntries: DiaryEntry[] = [
    {
      date: new Date().toISOString(),
      summary: 'Today I went into the market...',
      content: 'Today I went into the market Lorem ipsum dolor sit amet...'
    }
  ];

  entry: DiaryEntry = { date: '', summary: '', content: '' };
  isModalOpen = false;
  modalTitle = 'Add Entry';

  constructor(private modalController: ModalController) {}

  addEntry() {
    this.entry = { date: new Date().toISOString(), summary: '', content: '' };
    this.modalTitle = 'Add Entry';
    this.isModalOpen = true;
  }

  viewEntry(entry: DiaryEntry) {
    this.entry = { ...entry };
    this.modalTitle = 'View Entry';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveEntry() {
    const existingEntryIndex = this.diaryEntries.findIndex(e => e.date === this.entry.date);
    if (existingEntryIndex > -1) {
      this.diaryEntries[existingEntryIndex] = this.entry;
    } else {
      this.diaryEntries.push(this.entry);
    }
    this.closeModal();
  }
}
